<?php 

include_once "conexion.php";

global $conn;

$json = json_decode($_REQUEST['json']);

$sql = "SELECT * FROM alumno_bolsa WHERE dni='" . $json->dni . "' AND password='" . $json->password . "';";

    $resultado=$conn->query($sql);
    
    if ($resultado->num_rows > 0) {
    	$fila = $resultado->fetch_array();

		$sql = "UPDATE alumno_bolsa SET ultima_entrada=CURDATE() WHERE dni='" . $fila["dni"] . "';";

    	$resultado=$conn->query($sql);

        echo JSON_encode($fila);
    }else{
        echo JSON_encode($resultado->num_rows);
    }

?>