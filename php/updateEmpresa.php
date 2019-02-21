<?php 

include_once "conexion.php";


global $conn;

$objeto = json_decode($_REQUEST['json']);


$sql = "UPDATE empresa SET nombre='" . $objeto->nombre . "', telefono='" . $objeto->telefono . "',
	email='" . $objeto->email . "', direccion='" . $objeto->direccion . "', persona_contacto='" . $objeto->pcontacto . "' WHERE cif='" . $objeto->cif . "';";

$resultado = $conn->query($sql);

if($resultado) {
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>