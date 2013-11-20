<?php

namespace WebApp\CongresoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('CongresoBundle:Default:index.html.twig', array('name' => $name));
    }
}
