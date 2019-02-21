<?php

class Experiencia {

    public $dni;
    public $especialidad;
    public $empresa;
    public $tiempo;

    function __construct($dni, $especialidad, $empresa, $tiempo) {
        $this->dni = $dni;
        $this->especialidad = $especialidad;
        $this->empresa = $empresa;
        $this->tiempo = $tiempo;
    }

}
    
?>