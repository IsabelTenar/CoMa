<?php

namespace WebApp\CongresoBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="WebApp\CongresoBundle\Entity\CongresoRepository")
 */
class Congreso
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
     * @var string
     *
     * @ORM\Column(name="nombre", type="string", length=255)
     */
    private $nombre;

    /**
     * @var string
     *
     * @ORM\Column(name="informacion", type="string", length=255)
     */
    private $informacion;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="fecha_ini", type="date")
     */
    private $fechaIni;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="fecha_fin", type="date")
     */
    private $fechaFin;

    /**
     * @var string
     *
     * @ORM\Column(name="ubicacion", type="string", length=255)
     */
    private $ubicacion;

    /**
     * @var string
     *
     * @ORM\Column(name="contacto", type="string", length=255)
     */
    private $contacto;
    
        /**
     * @var \DateTime
     *
     * @ORM\Column(name="fecha_crea", type="date")
     */
    private $fechaCrea;

    /** @ORM\ManyToOne(targetEntity="WebApp\UsuarioBundle\Entity\Usuario")
     */
    private $usuario;

    public function __construct()
    {
        $this->fechaCrea = new \DateTime();
    }

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
     * Set nombre
     *
     * @param string $nombre
     * @return Congreso
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    
        return $this;
    }

    /**
     * Get nombre
     *
     * @return string 
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set informacion
     *
     * @param string $informacion
     * @return Congreso
     */
    public function setInformacion($informacion)
    {
        $this->informacion = $informacion;
    
        return $this;
    }

    /**
     * Get informacion
     *
     * @return string 
     */
    public function getInformacion()
    {
        return $this->informacion;
    }

    /**
     * Set fechaIni
     *
     * @param \DateTime $fechaIni
     * @return Congreso
     */
    public function setFechaIni($fechaIni)
    {
        $this->fechaIni = $fechaIni;
    
        return $this;
    }

    /**
     * Get fechaIni
     *
     * @return \DateTime 
     */
    public function getFechaIni()
    {
        return $this->fechaIni;
    }

    /**
     * Set fechaFin
     *
     * @param \DateTime $fechaFin
     * @return Congreso
     */
    public function setFechaFin($fechaFin)
    {
        $this->fechaFin = $fechaFin;
    
        return $this;
    }

    /**
     * Get fechaFin
     *
     * @return \DateTime 
     */
    public function getFechaFin()
    {
        return $this->fechaFin;
    }

    /**
     * Set ubicacion
     *
     * @param string $ubicacion
     * @return Congreso
     */
    public function setUbicacion($ubicacion)
    {
        $this->ubicacion = $ubicacion;
    
        return $this;
    }

    /**
     * Get ubicacion
     *
     * @return string 
     */
    public function getUbicacion()
    {
        return $this->ubicacion;
    }

    /**
     * Set contacto
     *
     * @param string $contacto
     * @return Congreso
     */
    public function setContacto($contacto)
    {
        $this->contacto = $contacto;
    
        return $this;
    }

    /**
     * Get contacto
     *
     * @return string 
     */
    public function getContacto()
    {
        return $this->contacto;
    }

    /**
     * Set usuario
     *
     * @param string $usuario
     * @return Congreso
     */
    public function setUsuario(\WebApp\UsuarioBundle\Entity\Usuario $usuario)
    {
        $this->usuario = $usuario;
    
        return $this;
    }

    /**
     * Get usuario
     *
     * @return string 
     */
    public function getUsuario()
    {
        return $this->usuario;
    }

    /**
     * Set fechaCrea
     *
     * @param \DateTime $fechaCrea
     * @return Congreso
     */
    public function setFechaCrea($fechaCrea)
    {
        $this->fechaCrea = $fechaCrea;
    
        return $this;
    }

    /**
     * Get fechaCrea
     *
     * @return \DateTime 
     */
    public function getFechaCrea()
    {
        return $this->fechaCrea;
    }
}