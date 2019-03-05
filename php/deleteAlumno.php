<?php 

include_once "conexion.php";


global $conn;


$alumno = json_decode($_REQUEST['json']);

$sqlSelect = "SELECT * FROM alumno_bolsa WHERE dni='" . $alumno->dni . "'";
$resultadoSelect = $conn->query($sqlSelect);

if($resultadoSelect->num_rows > 0) {
	$fila = $resultadoSelect->fetch_array();
	$sqlInsert = "INSERT INTO alumno_bolsa_backup (dni, nombre, apellidos, email, residencia, password, disponibilidadViajar, cambioResidencia, telefono, ultima_entrada) VALUES ('" . $fila["dni"] . "', '" . $fila["nombre"] . "', '" . $fila["apellidos"] . "'
,'" . $fila["email"] . "', '" . $fila["residencia"] . "', '" . $fila["password"] . "', '" . $fila["disponibilidadViajar"] . "', '" . $fila["cambioResidencia"] ."', '" . $fila["telefono"] . "', CURDATE());";

$resultadoInsert = $conn->query($sqlInsert);

$sqlDelete = "DELETE FROM alumno_bolsa WHERE dni='" . $alumno->dni . "'";
$resultado = $conn->query($sqlDelete);

echo JSON_encode("true");

}else{

	echo JSON_encode("false");
}


?>