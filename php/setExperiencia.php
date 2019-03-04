<?php 

include_once "conexion.php";


global $conn;


$exp = json_decode($_REQUEST['json']);

for($i=0; $i < count($exp); $i++) {

$sql = "INSERT INTO experiencia_laboral (dni, especialidad, empresa, tiempo)
 VALUES ('" . $exp[$i]->dni . "', '" . $exp[$i]->trabajo . "', '" . $exp[$i]->empresa . "' 
 , '" . $exp[$i]->tiempo . "');";

$resultado = $conn->query($sql);

}

if($resultado) {
	echo JSON_encode("true");
}else{
	printf("Errormessage: %s\n", $conn->error);
}


?>