<?php 

include_once "conexionInstituto.php";


global $conn;

$dni = $_REQUEST['dni'];

$sql = "SELECT * FROM alumnos WHERE dni='" . $dni . "';";

    $resultado=$conn->query($sql);
    
    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_array();

        echo JSON_encode($fila);
    }else{
        echo JSON_encode($resultado->num_rows);
    }

?>