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
     * @ORM\ManyToOne(targetEntity="Node", inversedBy="difficulties")
     * @ORM\JoinColumn(name="node_id", referencedColumnName="id")
     */
    public $node;

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
    public function getNode() {
        return $this->node;
    }

    /**
     * @param mixed $node
     */
    public function setNode($node): void {
        $this->node = $node;
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