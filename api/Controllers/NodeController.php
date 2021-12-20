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
use DataAccess\Repositories\NodeRepository;
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
            $difficulties = array_map(fn(NodeDifficulty $nd) => $nd->getDifficulty(), $node->getDifficulties()->toArray());
            if (!in_array($difficulty, $difficulties)) {
                continue;
            }

            /* @var $nodeViewModel NodeWithNotesViewModel */
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
                $nodeViewModel->tooltip = $node->getTooltip();
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

    public function getNodesForMissionV2(int $missionid, ?string $difficulty = null, bool $distinctOnly = false, bool $searchableOnly = false): array {
        /* @var $mission Mission */
        $mission = $this->entityManager->getRepository(Mission::class)->findOneBy(['id' => $missionid]);

        /* @var $nodes Node[] */
        $logger = new DebugStack();
        $this->entityManager->getConnection()->getConfiguration()->setSQLLogger($logger);
        $nodes = $this->nodeRepository->findByMissionV2($missionid);
        /*$nodes = $this->nodeRepository->findBy(['missionId' => $missionid, 'approved' => true],
            ['group' => 'ASC', 'name' => 'ASC']);*/

        $addedNodes = [];
        /* @var $nodeViewModel NodeWithNotesViewModel */
        $nodeViewModels = null;
        foreach ($nodes as $node) {
            $nodeViewModel = new NodeWithNotesViewModel();

            foreach ($node['notes'] as $note) {
                $innerViewModel = new NodeNoteViewModel();
                $innerViewModel->id = $note['id'];
                $innerViewModel->type = $note['type'];
                $innerViewModel->text = $note['text'];

                $nodeViewModel->notes[] = $innerViewModel;
            }

            if ($searchableOnly && !$node['searchable']) {
                continue;
            }

            $type = $node['type'];
            $group = $node['group'];

            if (!$distinctOnly ||
                $node['name'] === null ||
                $node['name'] === '' ||
                !in_array($type . $group . $node['name'], $addedNodes)) {
                $nodeViewModel->id = $node['id'];
                $nodeViewModel->missionId = $node['missionId'];
                $nodeViewModel->type = $node['type'];
                $nodeViewModel->icon = $node['icon'];
                $nodeViewModel->subgroup = $node['subgroup'];
                $nodeViewModel->name = $node['name'];
                $nodeViewModel->target = $node['target'];
                $nodeViewModel->searchable = $node['searchable'];
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

                $nodeViewModel->level = $node['level'];
                $nodeViewModel->latitude = $node['latitude'];
                $nodeViewModel->longitude = $node['longitude'];

                foreach ($node['variants'] as $missionVariant) {
                    $nodeViewModel->missionVariants[] = $missionVariant['difficulty'];
                }

                $nodeViewModel->group = $node['group'];
                $nodeViewModel->image = $node['image'];
                $nodeViewModel->tooltip = $node['tooltip'];
                $nodeViewModel->quantity = $node['quantity'];

                $nodeViewModels[] = $nodeViewModel;

                if ($distinctOnly && $node['name'] !== null && $node['name'] !== '') {
                    $addedNodes[] = $type . $group . $node['name'];
                }
            }
        }

        return $nodeViewModels;
    }

    public function createNode(int $missionId, string $difficulty, array $postData, User $user): Node {
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

        $node = $this->transformPostData($postData, $difficulty, $user, $missionId);

        $this->entityManager->persist($node);
        $this->entityManager->flush();

        $nodeId = $node->getId();

        $i = 0;
        foreach ($postData['note-type'] as $noteType) {
            $noteText = $postData['note-text'][$i++];

            if (trim($noteText) === '') {
                continue;
            }

            $nodeNote = new NodeNote();
            $nodeNote->setNodeId($nodeId);
            $nodeNote->setType($noteType);
            $nodeNote->setText($noteText);

            $this->entityManager->persist($nodeNote);
            $this->entityManager->flush();
        }

        return $node;
    }

    private function transformPostData(array $postData, string $difficulty, User $user, int $missionId): Node {
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

        list($type, $subgroup) = explode('|', $postData['subgroup']);
        $node = new Node();
        $node->setDifficulty($difficulty);
        $node->setGroup(trim($postData['group']));
        $node->setSubgroup($subgroup);
        $node->setIcon(isset($postData['icon']) && $postData['icon'] !== null && trim($postData['icon']) !== '' ?
            $postData['icon'] :
            $subgroup);
        $node->setLatitude($postData['latitude']);
        $node->setLevel($postData['level']);
        $node->setLongitude($postData['longitude']);
        $node->setMissionId($missionId);
        $node->setName($postData['name'] !== null ? trim($postData['name']) : '');
        $node->setTooltip($postData['name'] !== null ? trim($postData['name']) : '');
        if (isset($postData['quantity']) && intval($postData['quantity']) > 1) {
            $quantity = intval($postData['quantity']);
            $node->setTooltip($node->getTooltip() . " (x{$quantity})");
        }

        $node->setType($type);
        $node->setCreatedBy($user->getId());
        $node->setTarget('');
        $node->setSearchable($postData['searchable']);
        $node->setImage(isset($postData['image']) && $postData['image'] !== '' ? $postData['image'] : null);
        if (strpos($node->getImage(), 'https://media.hitmaps.com') !== 0) {
            // Can't link to anywhere other than https://media.hitmaps.com
            $node->setImage(null);
        }

        $node->setQuantity(isset($postData['quantity']) ? $postData['quantity'] : 1);

        switch ($subgroup) {
            case 'sabotage':
            case 'distraction':
            case 'interaction':
            case 'alarm':
                $node->setTarget($postData['action']);
                break;
            case 'agency-pickup':
                if ($postData['pickup-type'] === 'large') {
                    $node->setTarget('Agency Pickup');
                    $node->setIcon('agency-pickup');
                    if ($node->getName() !== '') {
                        $node->setTooltip('Agency Pickup: ' . $node->getName());
                    } else {
                        $node->setTooltip('Agency Pickup');
                    }
                } else {
                    $node->setTarget('Hidden Stash');
                    $node->setIcon('agency-pickup-stash');
                    if ($node->getName() !== '') {
                        $node->setTooltip('Hidden Stash: ' . $node->getName());
                    } else {
                        $node->setTooltip('Hidden Stash');
                    }
                }
                break;
            case 'up-stair':
                $node->setIcon($postData['stairwell-direction']);
                $node->setTooltip('Stairwell');
                break;
            case 'up-pipe':
                if ($postData['stairwell-direction'] === 'up-stair') {
                    $node->setIcon('up-pipe');
                } elseif ($postData['stairwell-direction'] === 'down-stair') {
                    $node->setIcon('down-pipe');
                } else {
                    $node->setIcon('up-down-pipe');
                }
                break;
            case 'blend-in':
                if ($node->getName() === 'Any Disguise') {
                    $node->setTooltip('Blend In');
                } else {
                    $node->setTooltip('Blend In as ' . $node->getName());
                }
                break;
            case 'locked-door':
            case 'conceal-item':
            case 'hiding-spot':
            case 'destroy-evidence':
            case 'weapon-crate':
            case 'camera':
            case 'frisk':
                $node->setTooltip($node->getGroup());
                break;
            case 'area':
                $node->setTooltip('');
                $node->setDifficulty('ALL');
                break;
            default:
                $node->setTarget($postData['target']);
        }
        $node->setApproved(UserRole::hasAccess($user->getRolesAsInts(), [UserRole::TRUSTED_EDITOR]));

        return $node;
    }

    public function editNode(int $nodeId, int $missionId, string $difficulty, array $postData, User $user): Node {

        $node = $this->transformPostData($postData, $difficulty, $user, $missionId);
        $node->setId($nodeId);

        $node = $this->entityManager->merge($node);
        $this->entityManager->persist($node);
        $this->entityManager->flush();

        $this->entityManager->getConnection()->executeUpdate("DELETE FROM `node_notes` WHERE `node_id` = " . $nodeId);

        $i = 0;
        foreach ($postData['note-type'] as $noteType) {
            $noteText = $postData['note-text'][$i++];

            if (trim($noteText) === '') {
                continue;
            }

            $nodeNote = new NodeNote();
            $nodeNote->setNodeId($nodeId);
            $nodeNote->setType($noteType);
            $nodeNote->setText($noteText);

            $this->entityManager->persist($nodeNote);
            $this->entityManager->flush();
        }

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

        return;
    }
}