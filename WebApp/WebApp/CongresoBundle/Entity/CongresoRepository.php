<?php
// src/WebApp/CongresoBundle/Entity/CongresoRepository.php
namespace WebApp\CongresoBundle\Entity;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM;

class CongresoRepository extends EntityRepository
{
    public function findCongresoMasReciente()
    {
        $em = $this->getEntityManager();
        $consulta = $em->createQuery('SELECT o FROM CongresoBundle:Congreso o
        ORDER BY o.fechaCrea DESC');
        $consulta->setMaxResults(1);
        $congreso = $consulta->getSingleResult();
        
    }
}
