<?php

namespace WebApp\CongresoBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Noticia
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Noticia
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="fecha_publi", type="date")
     */
    private $fechaPubli;

    /**
     * @var string
     *
     * @ORM\Column(name="autor", type="string", length=255)
     */
    private $autor;

    /**
     * @var string
     *
     * @ORM\Column(name="noticia", type="string", length=255)
     */
    private $noticia;

    /**@ORM\ManyToOne(targetEntity="Congreso")
     */
    private $congreso;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set fechaPubli
     *
     * @param \DateTime $fechaPubli
     * @return Noticia
     */
    public function setFechaPubli($fechaPubli)
    {
        $this->fechaPubli = $fechaPubli;
    
        return $this;
    }

    /**
     * Get fechaPubli
     *
     * @return \DateTime 
     */
    public function getFechaPubli()
    {
        return $this->fechaPubli;
    }

    /**
     * Set autor
     *
     * @param string $autor
     * @return Noticia
     */
    public function setAutor($autor)
    {
        $this->autor = $autor;
    
        return $this;
    }

    /**
     * Get autor
     *
     * @return string 
     */
    public function getAutor()
    {
        return $this->autor;
    }

    /**
     * Set noticia
     *
     * @param string $noticia
     * @return Noticia
     */
    public function setNoticia($noticia)
    {
        $this->noticia = $noticia;
    
        return $this;
    }

    /**
     * Get noticia
     *
     * @return string 
     */
    public function getNoticia()
    {
        return $this->noticia;
    }

    /**
     * Set congreso
     *
     * @param string $congreso
     * @return Noticia
     */
    public function setCongreso(\WebApp\CongresoBundle\Entity\Congreso $congreso)
    {
        $this->congreso = $congreso;
    
        return $this;
    }

    /**
     * Get congreso
     *
     * @return string 
     */
    public function getCongreso()
    {
        return $this->congreso;
    }
}