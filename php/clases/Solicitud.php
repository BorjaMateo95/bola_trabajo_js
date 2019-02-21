<?php

class Solicitud {

    public $fecha;
    public $perfil;
    public $viajar;
    public $cambioResidencia;
    public $experiencia;
    public $idEmpresa;   
    
    function __construct($fecha, $perfil, $viajar, $cambioResidencia, $experiencia, $idEmpresa) {
        $this->fecha = $fecha;
        $this->perfil = $perfil;
        $this->viajar = $viajar;
        $this->cambioResidencia = $cambioResidencia;
        $this->experiencia = $experiencia;
        $this->idEmpresa = $idEmpresa;   
    }

}
    
?>