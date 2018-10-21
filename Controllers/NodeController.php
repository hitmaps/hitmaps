<?php

namespace Controllers;


use Controllers\ViewModels\NodeNoteViewModel;
use Controllers\ViewModels\NodeWithNotesViewModel;
use DataAccess\Models\Node;
use DataAccess\Models\NodeNote;
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

    public function createNode(int $missionId, string $difficulty, array $postData): void {
        $node = new Node();
        $node->setDifficulty($difficulty);
        $node->setIcon($postData['icon']);
        $node->setLatitude($postData['latitude']);
        $node->setLevel($postData['level']);
        $node->setLongitude($postData['longitude']);
        $node->setMissionId($missionId);
        $node->setName($postData['name']);
        $node->setTarget($postData['target']);
        $node->setType($postData['type']);

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

        return;
    }
}