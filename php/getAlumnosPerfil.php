<?php 

include_once "conexion.php";


global $conn;

$alumno = json_decode($_REQUEST['json']);

if($alumno->posibilidadViajar == 1) {
    $viajar = "true";
}else{
    $viajar = "false";
}

if($alumno->cambiarResidencia == 1) {
    $residencia = "true";
}else{
    $residencia = "false";
}

$sqlGuardaSolicitud = "INSERT INTO solicitud (perfil, viajar, cambio_residencia, experiencia, idEmpresa) VALUES ('" .
$alumno->perfil . "', '" . $viajar . "', '" . $residencia . "', '" .
$alumno->experiencia . "', " . $alumno->idEmpresa . ");";

$resulInsert = $conn->query($sqlGuardaSolicitud);

$sql = "SELECT * FROM alumno_bolsa";

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