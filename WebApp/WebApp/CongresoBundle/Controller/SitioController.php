<?php

namespace WebApp\CongresoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class SitioController extends Controller {
    
    public function estaticaAction($pagina){
        return $this->render('CongresoBundle:Sitio:'.$pagina.'.html.twig');
    }
}
