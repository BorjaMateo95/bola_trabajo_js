<?php 

include_once "conexion.php";


global $conn;


$estudios = json_decode($_REQUEST['json']);

for($i=0; $i < count($estudios); $i++) {

$sql = "INSERT INTO curso_centro_alumno (dni, idEstCentro)
 VALUES ('" . $estudios[$i]->dni . "', '" . $estudios[$i]->idEstudio . "');";

$resultado = $conn->query($sql);

}

if($resultado) {
	echo JSON_encode("true");
}else{
	printf("Errormessage: %s\n", $conn->error);
}


?>