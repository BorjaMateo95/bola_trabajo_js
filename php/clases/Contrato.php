<?php

class Contrato {

    public $dniAlumno;
    public $idEmpresa;
    public $fechaAltaEmpleo;
    
    function __construct($dniAlumno, $idEmpresa, $fechaAltaEmpleo) {
        $this->dniAlumno = $dniAlumno;
        $this->idEmpresa = $idEmpresa;
        $this->fechaAltaEmpleo = $fechaAltaEmpleo;
    }

}
    
?>