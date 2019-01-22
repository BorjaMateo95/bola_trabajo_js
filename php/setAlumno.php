<?php 

include_once "conexion.php";


global $conn;


$alumno = json_decode($_REQUEST['json']);

$sql = "INSERT INTO alumno_bolsa (dni, nombre, apellidos, email, residencia) VALUES ('" . $alumno->dni . "', '" . $alumno->nombre . "', '" . $alumno->apellidos . "'
,'" . $alumno->email . "', '" . $alumno->direccion . "');";
$resultado = $conn->query($sql);

if($resultado) {
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>