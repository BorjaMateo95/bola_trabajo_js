<?php

class Cursos {

    public $nombre;
    public $centro;
    public $duracion;
    
    function __construct($nombre, $centro, $duracion) {
        $this->nombre = $nombre;
        $this->centro = $centro;
        $this->duracion = $duracion;
    }

}
    
?>