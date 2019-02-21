<?php

class Empresa {

    public $cif;
    public $nombre;
    public $telefono;
    public $email;
    public $direccion;
    public $pcontacto;

    public $arraySolicitudes;
    public $arrayContratos;
    
    
    function __construct($cif, $nombre, $telefono, $email, $direccion, $pcontacto) {
        $this->cif = $cif;
        $this->nombre = $nombre;
        $this->telefono = $telefono;
        $this->email = $email;
        $this->direccion = $direccion;
        $this->pcontacto = $pcontacto;

        $this->arraySolicitudes = array();
        $this->arrayContratos = array();

    }

    function setArraySolicitudes($arraySolicitudes) {
        $this->arraySolicitudes = $arraySolicitudes;
    }

    function setArratContratos($arrayContratos) {
        $this->arrayContratos = $arrayContratos;
    }

}
    
?>