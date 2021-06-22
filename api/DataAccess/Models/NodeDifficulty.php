<?php


namespace DataAccess\Models;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="DataAccess\Repositories\NodeDifficultyRepository")
 * @ORM\Table(name="node_to_difficulties")
 */
class NodeDifficulty {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    private $id;

    /**
     * @ORM\Column(type="integer", name="node_id")
     */
    private $nodeId;

    /**
     * @ORM\Column(type="string")
     */
    private $difficulty;

    /**
     * @return mixed
     */
    public function getId() {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getNodeId() {
        return $this->nodeId;
    }

    /**
     * @param mixed $nodeId
     */
    public function setNodeId($nodeId): void {
        $this->nodeId = $nodeId;
    }

    /**
     * @return mixed
     */
    public function getDifficulty() {
        return $this->difficulty;
    }

    /**
     * @param mixed $difficulty
     */
    public function setDifficulty($difficulty): void {
        $this->difficulty = $difficulty;
    }
}