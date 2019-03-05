<?php

class ObjGeneral {

    public $nalumnos;
    public $nempresas;
    public $nestudios;
    public $nsolicitudes;
    public $nempleadoras;

    function __construct($nalumnos, $nempresas, $nestudios, $nsolicitudes, $nempleadoras) {
        $this->nalumnos = $nalumnos;
        $this->nempresas = $nempresas;
        $this->nestudios = $nestudios;
        $this->nsolicitudes = $nsolicitudes;
        $this->nempleadoras = $nempleadoras;
    }

}
    
?>