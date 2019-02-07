<?php 

include_once "conexion.php";


global $conn;

$objeto = json_decode($_REQUEST['json']);

if($objeto->perfil == "alumno") {
	$sql = "UPDATE alumno_bolsa SET password='" . $objeto->pass1 . "', 
	temporal='false' WHERE dni='" . $objeto->identificador . "';";
}else{
	$sql = "UPDATE empresa SET password='" . $objeto->pass1 . "', 
	temporal='false' WHERE cif='" . $objeto->identificador . "';";
}


$resultado = $conn->query($sql);

if($resultado) {
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>