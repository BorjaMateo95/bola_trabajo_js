<?php 

include_once "conexion.php";


global $conn;

$objeto = json_decode($_REQUEST['json']);

if($objeto->disponibilidadViajar == 1) {
    $viajar = "true";
}else{
    $viajar = "false";
}

if($objeto->cambioResidencia == 1) {
    $residencia = "true";
}else{
    $residencia = "false";
}

$sql = "UPDATE alumno_bolsa SET nombre='" . $objeto->nombre . "', 
	apellidos='" . $objeto->apellidos . "', email='" . $objeto->email . "',
	residencia='" . $objeto->direccion . "', telefono='" . $objeto->telefono . "', disponibilidadViajar='" . $viajar . "',
	 cambioResidencia='" . $residencia . "' WHERE dni='" . $objeto->dni . "';";


$resultado = $conn->query($sql);

if($resultado) {
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>