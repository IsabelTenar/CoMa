<?php

namespace WebApp\CongresoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * return platilla de pagina
     */
    public function portadaAction(){
        $em = $this->getDoctrine()->getManager();
        
        $congreso = $em->getRepository('CongresoBundle:Congreso')->findCongresoMasReciente();
        
        return $this->render(
        'CongresoBundle:Default:portada.html.twig',
        array('congreso' => $congreso)
        );
    }
}
