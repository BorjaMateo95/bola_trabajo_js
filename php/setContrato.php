<?php 

include_once "conexion.php";


global $conn;


$alumno = json_decode($_REQUEST['json']);

$sql = "INSERT INTO empleadora (dniAlumno, idEmpresa) VALUES ('" . $alumno->dni . "', " . $alumno->idEmpresa . ");";
$resultado = $conn->query($sql);

$sqlA = "UPDATE alumno_bolsa SET contratado='true' WHERE dni='" . $alumno->dni . "';";
$resultado = $conn->query($sqlA);

$sqls = "SELECT * FROM alumno_bolsa WHERE dni='" . $alumno->dni . "';";
$resuSelect = $conn->query($sqls);
$fila = $resuSelect->fetch_array();

if($resultado) {
	include "enviaCorreo.php";
	mandaCorreo($fila["email"], "Bolsa Trabajo", "Enhorabuena " . $fila["nombre"] . ", una empresa lo ha contratado. Entra 
		a nuestra web para saber mas.");
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>