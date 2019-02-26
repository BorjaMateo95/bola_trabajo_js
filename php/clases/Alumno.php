<?php

class Alumno {

    public $dni;
    public $nombre;
    public $apellidos;
    public $email;
    public $residencia;
    public $disponibilidadViajar;
    public $cambioResidencia;
    public $telefono;
    public $contratado;

    public $arrayEstudios;
    public $arrayExperiencia;
    public $arrayCursos;
    public $arrayContratos;
    
    
    function __construct($dni, $nombre, $apellidos, $email, $residencia, $disponibilidadViajar, $cambioResidencia, 
        $telefono, $contrato) {

        $this->dni = $dni;
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->email = $email;
        $this->residencia = $residencia;
        $this->disponibilidadViajar = $disponibilidadViajar;
        $this->cambioResidencia = $cambioResidencia;
        $this->telefono = $telefono;
        $this->contratado = $contrato;

        $this->arrayEstudios = array();
        $this->arrayExperiencia = array();
        $this->arrayCursos = array();
        $this->arrayContratos = array();
    }


    function setEstudios($aEstudios) {
        $this->arrayEstudios = $aEstudios;
    }

    function setExperiencias($arrayExperiencia) {
        $this->arrayExperiencia = $arrayExperiencia;
    }

    function setCursos($arrayCursos) {
        $this->arrayCursos = $arrayCursos;
    }

    function setContratos($arrayContratos) {
        $this->arrayContratos = $arrayContratos;
    }

}
    
?>