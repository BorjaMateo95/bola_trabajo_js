<?php 

include_once "conexion.php";


global $conn;

$objeto = json_decode($_REQUEST['json']);

if($objeto->perfil == "alumno") {
	$sql = "UPDATE alumno_bolsa SET password='" . $objeto->password . "', 
	temporal='true' WHERE email='" . $objeto->email . "';";
}else{
	$sql = "UPDATE empresa SET password='" . $objeto->password . "', 
	temporal='true' WHERE email='" . $objeto->email . "';";
}


$resultado = $conn->query($sql);

if($resultado) {
	include "enviaCorreo.php";
	mandaCorreo($objeto->email, "Bolsa Trabajo", "Su nueva contraseña: <b>" . $objeto->password . "</b>");
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>