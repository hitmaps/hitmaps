<?php

namespace DataAccess\Repositories;


use Doctrine\ORM\EntityRepository;

class BodyRepository extends EntityRepository {
    public function findAll() {
        return $this->findBy([], ['order' => 'ASC']);
    }
}