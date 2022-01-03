<?php

namespace Controllers;


use BusinessLogic\MissionType;
use BusinessLogic\UserRole;
use Controllers\ViewModels\NodeNoteViewModel;
use Controllers\ViewModels\NodeWithNotesViewModel;
use Controllers\ViewModels\Sidebar\CategoryViewModel;
use Controllers\ViewModels\Sidebar\TopLevelCategoryViewModel;
use DataAccess\Models\Mission;
use DataAccess\Models\MissionVariant;
use DataAccess\Models\Node;
use DataAccess\Models\NodeCategory;
use DataAccess\Models\NodeDifficulty;
use DataAccess\Models\NodeNote;
use DataAccess\Models\User;
use DataAccess\Repositories\MissionVariantRepository;
use DataAccess\Repositories\NodeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\DBAL\Logging\DebugStack;
use Doctrine\ORM\EntityManager;
use Doctrine\Persistence\ObjectRepository;

class NodeController {
    /* @var $entityManager EntityManager */
    private $entityManager;

    /* @var $nodeRepository NodeRepository */
    private $nodeRepository;

    /* @var $nodeCategoryRepository ObjectRepository */
    private $nodeCategoryRepository;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
        $this->nodeRepository = $entityManager->getRepository(Node::class);
        $this->nodeCategoryRepository = $entityManager->getRepository(NodeCategory::class);
    }

    public function getNodesForMissionV1(int $missionid, string $difficulty, bool $distinctOnly = false, bool $searchableOnly = false): array {
        /* @var $mission Mission */
        $mission = $this->entityManager->getRepository(Mission::class)->findOneBy(['id' => $missionid]);

        /* @var $nodesWithNotes Node[] */
        $nodesWithNotes = $this->nodeRepository->findByMission($missionid);

        $groups = [
            'Points of Interest' => new TopLevelCategoryViewModel('Points of Interest'),
            'Weapons and Tools' => new TopLevelCategoryViewModel('Weapons and Tools'),
            'Navigation' => new TopLevelCategoryViewModel('Navigation'),
        ];

        $forSniperAssassin = $mission->getMissionType() === MissionType::SNIPER_ASSASSIN;
        $nodeCategories = $this->nodeCategoryRepository->findBy(['forMission' => !$forSniperAssassin, 'forSniperAssassin' => $forSniperAssassin ], ['order' => 'ASC', 'id' => 'ASC']);
        foreach ($nodeCategories as $nodeCategory) {
            /* @var $nodeCategory NodeCategory */
            $categoryViewModel = new CategoryViewModel();
            $categoryViewModel->name = $nodeCategory->getGroup();
            $categoryViewModel->icon = $nodeCategory->getIcon();
            $categoryViewModel->collapsible = $nodeCategory->getCollapsible();
            $categoryViewModel->order = $nodeCategory->getOrder();

            /* @var $topLevelCategory TopLevelCategoryViewModel */
            $topLevelCategory = $groups[$nodeCategory->getType()];

            $topLevelCategory->items[$nodeCategory->getGroup()] = $categoryViewModel;
        }

        $addedNodes = [];
        foreach ($nodesWithNotes as $node) {
            $difficulties = array_map(fn(MissionVariant $nd) => $nd->getVariant(), $node->getVariants()->toArray());
            if (!in_array($difficulty, $difficulties)) {
                continue;
            }

            $nodeViewModel = new NodeWithNotesViewModel();

            /* @var $note NodeNote */
            foreach ($node->getNotes()->toArray() as $note) {
                $innerViewModel = new NodeNoteViewModel();
                $innerViewModel->id = $note->getId();
                $innerViewModel->type = $note->getType();
                $innerViewModel->text = $note->getText();

                $nodeViewModel->notes[] = $innerViewModel;
            }

            /* @var $notes NodeNote[] */
            if ($searchableOnly && !$node->isSearchable()) {
                continue;
            }

            $type = $node->getType();
            $group = $node->getGroup();

            if (!$distinctOnly ||
                $node->getName() === null ||
                $node->getName() === '' ||
                !in_array($type . $group . $node->getName(), $addedNodes)) {
                $nodeViewModel->id = $node->getId();
                $nodeViewModel->missionId = $node->getMissionId();
                $nodeViewModel->type = $node->getType();
                $nodeViewModel->icon = $node->getIcon();
                $nodeViewModel->subgroup = $node->getSubgroup();
                $nodeViewModel->name = $node->getName();
                $nodeViewModel->target = $node->getTarget();
                $nodeViewModel->searchable = $node->isSearchable();
                switch ($nodeViewModel->icon) {
                    case 'poison':
                        $nodeViewModel->targetIcon = 'fa-user';
                        break;
                    case 'interaction':
                    case 'sabotage':
                    case 'distraction':
                        $nodeViewModel->targetIcon = 'fa-cog';
                        break;
                    default:
                        $nodeViewModel->targetIcon = '';
                        break;
                }

                $nodeViewModel->level = $node->getLevel();
                $nodeViewModel->latitude = $node->getLatitude();
                $nodeViewModel->longitude = $node->getLongitude();
                $nodeViewModel->difficulty = $difficulty;
                $nodeViewModel->group = $node->getGroup();
                $nodeViewModel->image = $node->getImage();
                $nodeViewModel->tooltip = $node->getName() ?? '';
                $nodeViewModel->quantity = $node->getQuantity();

                $categoryViewModel = $groups[$type]->items[$group];
                $categoryViewModel->items[] = $nodeViewModel;

                if ($distinctOnly && $node->getName() !== null && $node->getName() !== '') {
                    $addedNodes[] = $type . $group . $node->getName();
                }
            }
        }

        return $groups;
    }

    public function getNodesForMissionV2(int $missionid): array {
        /* @var $nodes array */
        $nodes = $this->nodeRepository->findByMissionV2($missionid);

        $nodeViewModels = [];

        foreach ($nodes as $node) {
            $nodeViewModel = new NodeWithNotesViewModel();

            /* @var $note NodeNote */
            foreach ($node['notes'] as $note) {
                $innerViewModel = new NodeNoteViewModel();
                $innerViewModel->id = $note['id'];
                $innerViewModel->type = $note['type'];
                $innerViewModel->text = $note['text'];

                $nodeViewModel->notes[] = $innerViewModel;
            }

            $nodeViewModel->id = $node['id'];
            $nodeViewModel->missionId = $node['missionId'];
            $nodeViewModel->type = $node['type'];
            $nodeViewModel->icon = $node['icon'];
            $nodeViewModel->subgroup = $node['subgroup'];
            $nodeViewModel->name = $node['name'];
            $nodeViewModel->target = $node['target'];
            $nodeViewModel->searchable = $node['searchable'];
            unset($nodeViewModel->targetIcon);
            unset($nodeViewModel->difficulty);
            unset($nodeViewModel->approved);

            $nodeViewModel->level = $node['level'];
            $nodeViewModel->latitude = $node['latitude'];
            $nodeViewModel->longitude = $node['longitude'];
            $nodeViewModel->group = $node['group'];
            $nodeViewModel->image = $node['image'];
            unset($nodeViewModel->tooltip);
            $nodeViewModel->quantity = $node['quantity'];

            foreach ($node['variants'] as $missionVariant) {
                $nodeViewModel->variants[] = $missionVariant['id'];
            }

            $nodeViewModels[] = $nodeViewModel;
        }

        return $nodeViewModels;
    }

    public function createNode(array $requestBody, User $user): Node {
        /*
         * - Sabotage uses "action" instead of "target"
         * - Distraction uses "action" instead of "target"
         * - Agency Pickup uses "pickup-type" instead of "target"
         *     - "large" -> Large Pickup
         *     - "small" -> Stash
         * - Stairwell uses "stairwell-direction" as its icon
         *     - up-stair
         *     - up-down-stair
         *     - down-stair
         */

        $node = $this->transformPostData($requestBody, $user);

        $this->persistNodeData($node);

        return $node;
    }

    private function transformPostData(array $requestBody, User $user, ?Node $existingNode = null): Node {
        $node = $existingNode ?? new Node();
        $node->setGroup(trim($requestBody['category']['group']));
        $node->setSubgroup($requestBody['category']['subgroup']);
        $node->setIcon($requestBody['icon']);
        $node->setLatitude($requestBody['latitude']);
        $node->setLevel($requestBody['level']);
        $node->setLongitude($requestBody['longitude']);

        $missionId = intval($requestBody['missionId']);
        $node->setMissionId($missionId);
        $node->setName($requestBody['name'] !== null ? trim($requestBody['name']) : '');

        $node->setType($requestBody['category']['type']);
        $node->setCreatedBy($user->getId());
        $node->setTarget($requestBody['targetAction']);
        $node->setSearchable($requestBody['category']['searchable']);
        $node->setImage(isset($requestBody['image']) && $requestBody['image'] !== '' ? $requestBody['image'] : null);
        if (!str_starts_with($node->getImage(), 'https://media.hitmaps.com')) {
            // Can't link to anywhere other than https://media.hitmaps.com
            $node->setImage(null);
        }

        $node->setQuantity($requestBody['quantity'] ?? 1);

        /* @var $mission Mission */
        $mission = $this->entityManager->getRepository(Mission::class)->findOneBy(['id' => $missionId]);

        $node->getVariants()->clear();
        foreach ($requestBody['variantIds'] as $selectedVariantId) {
            $selectedVariant = current(array_filter($mission->getVariants()->toArray(), fn(MissionVariant $variant) => $variant->getId() === $selectedVariantId));
            if ($selectedVariant === false) {
                // Somehow got a bad variant. Just skip it.
                continue;
            }

            $node->addVariant($selectedVariant);
        }

        $node->getNotes()->clear();
        foreach ($requestBody['notes'] as $note) {
            if (trim($note['text']) === '') {
                continue;
            }

            $nodeNote = new NodeNote();
            $nodeNote->setType($note['type']);
            $nodeNote->setText($note['text']);
            $node->addNote($nodeNote);
        }

        $node->setApproved(true);

        return $node;
    }

    private function persistNodeData(Node $node): void {
        $this->entityManager->persist($node);
        $this->entityManager->flush();

        $this->entityManager->flush();
    }

    public function editNode(int $nodeId, array $requestBody, User $user): Node {
        $existingNode = $this->entityManager->getRepository(Node::class)->findOneBy(['id' => $nodeId]);

        $node = $this->transformPostData($requestBody, $user, $existingNode);
        $this->persistNodeData($node);

        return $node;
    }

    public function moveNode($nodeId, $latitude, $longitude): void {
        /* @var $node Node */
        $node = $this->entityManager->getRepository(Node::class)->findOneBy(['id' => $nodeId]);

        if ($node === null) {
            throw new \Exception("Could not find node with ID {$nodeId}");
        }

        $node->setLatitude($latitude);
        $node->setLongitude($longitude);
        $this->entityManager->persist($node);
        $this->entityManager->flush();
    }
}