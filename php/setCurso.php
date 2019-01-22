<?php 

include_once "conexion.php";


global $conn;


$curso = json_decode($_REQUEST['json']);

$sqlCurso = "INSERT INTO cursos (nombre, centro, duracion) VALUES ('" . $curso->nombre . "', 
'" . $curso->perfil . "', '" . $curso->horas . "');";

$resultadoCurso = $conn->query($sqlCurso);

$idCurso = $conn->insert_id;

$sql = "INSERT INTO curso_alumno (dni, idCurso)
 VALUES ('" . $curso->dni . "', '" . $idCurso . "');";

$resultado = $conn->query($sql);

if($resultado) {
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}


?>