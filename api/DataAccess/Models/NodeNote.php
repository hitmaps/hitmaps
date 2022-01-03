<?php


namespace DataAccess\Models;


use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="node_notes")
 */
class NodeNote {
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     */
    public $id;

    /**
     * @ORM\ManyToOne(targetEntity="Node", inversedBy="notes")
     * @ORM\JoinColumn(name="node_id", referencedColumnName="id")
     */
    public $node;

    /**
     * @ORM\Column(type="string")
     */
    public $type;

    /**
     * @ORM\Column(type="string")
     */
    public $text;

    /**
     * @return mixed
     */
    public function getId(): int {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId(int $id): void {
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
    public function getType(): string {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType(string $type): void {
        $this->type = $type;
    }

    /**
     * @return mixed
     */
    public function getText(): string {
        return $this->text;
    }

    /**
     * @param mixed $text
     */
    public function setText(string $text): void {
        $this->text = $text;
    }
}