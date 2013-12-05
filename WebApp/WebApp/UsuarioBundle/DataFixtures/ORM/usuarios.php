<?php

// src/Cupon/CiudadBundle/DataFixtures/ORM/Usuarios.php
namespace WebApp\UsuariosBundle\DataFixtures\ORM;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use WebApp\UsuarioBundle\Entity\Usuario;
class Usuarios implements FixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $usuarios = array(
        array('id' => 'kakuro@correo.ugr.es' , 'nombre' => 'Isabel','apellidos' =>'Aguilar' ,'contrasenia' => '123456'),
        );
        foreach ($usuarios as $usuario) {
            $entidad = new Usuario();
            $entidad->setId($usuario['id']);
            $entidad->setNombre($usuario['nombre']);
            $entidad->setApellidos($usuario['apellidos']);
            $entidad->setContrasenia($usuario['contrasenia']);
            
            $manager->persist($entidad);
        }
        $manager->flush();
    }
}