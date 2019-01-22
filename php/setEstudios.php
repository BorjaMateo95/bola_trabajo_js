<?php 

include_once "conexion.php";


global $conn;


$estudios = json_decode($_REQUEST['json']);

$sql = "INSERT INTO curso_centro_alumno (dni, idEstCentro)
 VALUES ('" . $estudios->dni . "', '" . $estudios->idEstudio . "');";

$resultado = $conn->query($sql);

if($resultado) {
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>