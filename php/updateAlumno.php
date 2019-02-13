<?php 

include_once "conexion.php";


global $conn;

$objeto = json_decode($_REQUEST['json']);

$sql = "UPDATE alumno_bolsa SET nombre='" . $objeto->nombre . "', 
	apellidos='" . $objeto->apellidos . "', email='" . $objeto->email . "',
	residencia='" . $objeto->direccion . "' WHERE dni='" . $objeto->dni . "';";


$resultado = $conn->query($sql);

if($resultado) {
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>