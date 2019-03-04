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

$sql = "INSERT INTO alumno_bolsa (dni, nombre, apellidos, email, residencia, password, disponibilidadViajar, cambioResidencia, telefono) VALUES ('" . $alumno->dni . "', '" . $alumno->nombre . "', '" . $alumno->apellidos . "'
,'" . $alumno->email . "', '" . $alumno->direccion . "', '" . $alumno->password . "', '" . $viajar . "', '" . $residencia ."', '" . $alumno->telefono . "');";
$resultado = $conn->query($sql);

if($resultado) {
	include "enviaCorreo.php";
	mandaCorreo($alumno->email, "Bolsa Trabajo", "<h3>Hola, " . $alumno->nombre . "</h3><br>Bienvenido a la Bolsa de Trabajo, 
        su contraseña temporal es <b>" . $alumno->password . "</b>");
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>