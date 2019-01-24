<?php 

include_once "conexion.php";


global $conn;

$empresa = json_decode($_REQUEST['json']);

$sql = "INSERT INTO empresa (nombre, cif, telefono, email, password) VALUES ('" . $empresa->cif . "', '" . $empresa->nombre . "', '" . $empresa->telefono . "', '" . $empresa->email . "', '" . $empresa->password ."');";

$resultado = $conn->query($sql);

if($resultado) {
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>