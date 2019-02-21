<?php 

include_once "conexion.php";


global $conn;

$perfil = json_decode($_REQUEST['json']);

$sql = "SELECT DISTINCT e.nombre, e.cif, e.telefono, e.email, e.direccion, e.persona_contacto FROM empresa e, solicitud s WHERE e.id = s.idEmpresa AND s.perfil = '" . $perfil->idestudio ."'";

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