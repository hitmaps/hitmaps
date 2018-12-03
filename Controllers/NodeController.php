<?php

namespace Controllers;


use BusinessLogic\UserRole;
use Controllers\ViewModels\NodeNoteViewModel;
use Controllers\ViewModels\NodeWithNotesViewModel;
use DataAccess\Models\Node;
use DataAccess\Models\NodeNote;
use DataAccess\Models\User;
use DataAccess\Repositories\NodeRepository;
use Doctrine\Common\Persistence\ObjectRepository;
use Doctrine\ORM\EntityManager;

class NodeController {
    /* @var $entityManager EntityManager */
    private $entityManager;

    /* @var $nodeRepository NodeRepository */
    private $nodeRepository;

    /* @var $nodeNoteRepository ObjectRepository */
    private $nodeNoteRepository;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
        $this->nodeRepository = $entityManager->getRepository(Node::class);
        $this->nodeNoteRepository = $entityManager->getRepository(NodeNote::class);
    }

    public function getNodesForMission(int $missionid, string $difficulty, bool $distinctOnly = false): array {
        $nodes = $this->nodeRepository->findByMissionAndDifficulty($missionid, $difficulty);

        $groups = [];
        $addedNodes = [];
        foreach ($nodes as $node) {
            /* @var $node Node */
            /* @var $notes NodeNote[] */
            $notes = $this->nodeNoteRepository->findBy(['nodeId' => $node->getId()]);

            $type = $node->getType();
            $group = $node->getGroup();
            if (!isset($groups[$type])) {
                $groups[$type] = [];
            }

            if (!isset($groups[$type][$group])) {
                $groups[$type][$group] = [];
            }

            if (!$distinctOnly ||
                $node->getName() === null ||
                $node->getName() === '' ||
                !in_array($type . $group . $node->getName(), $addedNodes)) {
                $nodeViewModel = new NodeWithNotesViewModel();
                $nodeViewModel->id = $node->getId();
                $nodeViewModel->missionId = $node->getMissionId();
                $nodeViewModel->type = $node->getType();
                $nodeViewModel->icon = $node->getIcon();
                $nodeViewModel->subgroup = $node->getSubgroup();
                $nodeViewModel->name = $node->getName();
                $nodeViewModel->target = $node->getTarget();
                $nodeViewModel->level = $node->getLevel();
                $nodeViewModel->latitude = $node->getLatitude();
                $nodeViewModel->longitude = $node->getLongitude();
                $nodeViewModel->difficulty = $node->getDifficulty();
                $nodeViewModel->group = $node->getGroup();
                $nodeViewModel->notes = [];
                foreach ($notes as $note) {
                    $innerViewModel = new NodeNoteViewModel();
                    $innerViewModel->id = $note->getId();
                    $innerViewModel->type = $note->getType();
                    $innerViewModel->text = $note->getText();

                    $nodeViewModel->notes[] = $innerViewModel;
                }

                $groups[$type][$group][] = $nodeViewModel;

                if ($distinctOnly && $node->getName() !== null && $node->getName() !== '') {
                    $addedNodes[] = $type . $group . $node->getName();
                }
            }
        }

        return $groups;
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

        list($type, $subgroup) = explode('|', $postData['subgroup']);
        $node = new Node();
        $node->setDifficulty($difficulty);
        $node->setGroup(trim($postData['group']));
        $node->setSubgroup($subgroup);
        $node->setIcon($postData['icon'] !== null && trim($postData['icon']) !== '' ?
            $postData['icon'] :
            $subgroup);
        $node->setLatitude($postData['latitude']);
        $node->setLevel($postData['level']);
        $node->setLongitude($postData['longitude']);
        $node->setMissionId($missionId);
        $node->setName($postData['name'] !== null ? trim($postData['name']) : '');
        $node->setType($type);
        $node->setCreatedBy($user->getId());
        $node->setTarget('');

        switch ($subgroup) {
            case 'sabotage':
            case 'distraction':
            case 'interaction':
            case 'alarm':
                $node->setTarget($postData['action']);
                break;
            case 'agency-pickup':
                if ($postData['pickup-type'] === 'large') {
                    $node->setTarget('Large');
                } else {
                    $node->setTarget('Small');
                }
                break;
            case 'up-stair':
                $node->setIcon($postData['stairwell-direction']);
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
            default:
                $node->setTarget($postData['target']);
        }
        $node->setApproved(UserRole::hasAccess($user->getRolesAsInts(), [UserRole::TRUSTED_EDITOR]));

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