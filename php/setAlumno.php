<?php 

include_once "conexion.php";


global $conn;


$alumno = json_decode($_REQUEST['json']);

$sql = "INSERT INTO alumno_bolsa (dni, nombre, apellidos, email, residencia, password) VALUES ('" . $alumno->dni . "', '" . $alumno->nombre . "', '" . $alumno->apellidos . "'
,'" . $alumno->email . "', '" . $alumno->direccion . "', '" . $alumno->password . "');";
$resultado = $conn->query($sql);

if($resultado) {
	include "enviaCorreo.php";
	mandaCorreo($alumno->email, "Bolsa Trabajo", "Bienvenido a la Bolsa de Trabajo, 
        su contraseña temporal es <b>" . $alumno->password . "</b>");
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>