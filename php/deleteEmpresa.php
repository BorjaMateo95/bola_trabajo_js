<?php 

include_once "conexion.php";


global $conn;


$empresa = json_decode($_REQUEST['json']);

$sqlSelect = "SELECT * FROM empresa WHERE cif='" . $empresa->cif . "'";
$resultadoSelect = $conn->query($sqlSelect);

if($resultadoSelect->num_rows > 0) {
	$fila = $resultadoSelect->fetch_array();
	$sqlInsert = "INSERT INTO empresa_backup (nombre, cif, telefono, email, password, direccion, persona_contacto, ultima_entrada) VALUES ('" . $fila["nombre"] . "', '" . $fila["cif"] . "', '" . $fila["telefono"] . "', '" . $fila["email"] . "', '" . $fila["password"] ."', '" . $fila["direccion"] . "', '" . $fila["persona_contacto"] . "', CURDATE());";

$resultadoInsert = $conn->query($sqlInsert);

$sqlDelete = "DELETE FROM empresa WHERE cif='" . $empresa->cif . "'";
$resultado = $conn->query($sqlDelete);

echo JSON_encode("true");

}else{
	echo JSON_encode("false");
}


?>