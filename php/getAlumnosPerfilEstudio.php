<?php 

include_once "conexion.php";


global $conn;

$alumno = json_decode($_REQUEST['json']);

$sql = "SELECT a.dni, a.nombre, a.apellidos, a.email, a.residencia, a.telefono FROM alumno_bolsa a, curso_centro_alumno c WHERE a.dni = c.dni AND c.idEstCentro = '" .$alumno->idestudio ."'";

    $resultado=$conn->query($sql);
    
    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_array();
        while ($fila) {
		    $datos[]=$fila;
            $fila= $resultado->fetch_array();
        }
        echo JSON_encode($datos);
    }else{
        echo JSON_encode($resultado->num_rows);
    }

?>