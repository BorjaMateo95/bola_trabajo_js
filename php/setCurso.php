<?php 

include_once "conexion.php";


global $conn;


$curso = json_decode($_REQUEST['json']);


for($i=0; $i < count($curso); $i++) {

	$sqlCurso = "INSERT INTO cursos (nombre, centro, duracion) VALUES ('" . $curso[$i]->nombre . "', 
'" . $curso[$i]->perfil . "', '" . $curso[$i]->horas . "');";

$resultadoCurso = $conn->query($sqlCurso);

$idCurso = $conn->insert_id;

$sql = "INSERT INTO curso_alumno (dni, idCurso)
 VALUES ('" . $curso[$i]->dni . "', '" . $idCurso . "');";

$resultado = $conn->query($sql);

}


if($resultado) {
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>