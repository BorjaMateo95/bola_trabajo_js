<?php 

include_once "conexion.php";


global $conn;

$datos = json_decode($_REQUEST['json']);

$sql = "SELECT * FROM empresa WHERE cif='" . $datos->cif . "' and password='" . $datos->password . "';";

    $resultado=$conn->query($sql);
    
    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_array();
        $sql = "UPDATE empresa SET ultima_entrada=CURDATE() WHERE cif='" . $fila["cif"] . "';";

    	$resultado=$conn->query($sql);
    	
        echo JSON_encode($fila);
    }else{
        echo JSON_encode($resultado->num_rows);
    }

?>