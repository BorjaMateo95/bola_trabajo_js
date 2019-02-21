<?php

class Estudios {

    public $nombre;
    public $nivel;
    public $perfil;
    public $nombreInstituto;

    function __construct($nombre, $nivel, $perfil, $nombreInstituto) {
        $this->nombre = $nombre;
        $this->nivel = $nivel;
        $this->perfil = $perfil;
        $this->nombreInstituto = $nombreInstituto;
    }

}
    
?>