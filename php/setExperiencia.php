<?php 

include_once "conexion.php";


global $conn;


$exp = json_decode($_REQUEST['json']);

$sql = "INSERT INTO experiencia_laboral (dni, especialidad, empresa, tiempo)
 VALUES ('" . $exp->dni . "', '" . $exp->trabajo . "', '" . $exp->empresa . "' 
 , '" . $exp->tiempo . "');";

$resultado = $conn->query($sql);

if($resultado) {
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>