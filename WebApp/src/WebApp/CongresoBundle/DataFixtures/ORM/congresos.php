<?php


// src/Cupon/CiudadBundle/DataFixtures/ORM/Congresos.php
namespace WebApp\UsuariosBundle\DataFixtures\ORM;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use WebApp\CongresoBundle\Entity\Congreso;
class Congresos implements FixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $congresos = array(
        array('nombre' => 'Imaginary Congress' ,
            'informacion' => 'Se trata de un congreso imaginario de prueba',
            'fechaIni' =>new \DateTime('2013-11-22'),
            'fechaFin' =>new \DateTime('2013-11-25'), 
            'ubicacion' => 'URL de ubicacion', 
            'contacto' => 'tichatuch@gmail.com',
            'usuario' => 'Aqui una instancia de la entidad Usuario!'),
        );
        foreach ($congresos as $congreso) {
            $entidad = new Congreso();
            $entidad->setNombre($congreso['nombre']);
            $entidad->setInformacion($congreso['informacion']);
            $entidad->setFechaIni($congreso['fechaIni']);
            $entidad->setFechaFin($congreso['fechaFin']);
            $entidad->setUbicacion($congreso['ubicacion']);
            $entidad->setContacto($congreso['contacto']);
            #$entidad->setUsuario($congreso['usuario']);
            
            $manager->persist($entidad);
        }
        $manager->flush();
    }
}