<?php 

include_once "conexion.php";


global $conn;

$empresa = json_decode($_REQUEST['json']);

$sql = "INSERT INTO empresa (nombre, cif, telefono, email, password, direccion, persona_contacto) VALUES ('" . $empresa->nombre . "', '" . $empresa->cif . "', '" . $empresa->telefono . "', '" . $empresa->email . "', '" . $empresa->password ."', '" . $empresa->direccion . "', '" . $empresa->pcontacto . "');";

$resultado = $conn->query($sql);

if($resultado) {
    include "enviaCorreo.php";
	mandaCorreo($empresa->email, "Bolsa Trabajo", "Bienvenido a la Bolsa de Trabajo, 
        su contraseña temporal es <b>" . $empresa->password . "</b>");
	echo JSON_encode("true");
}else{
	echo JSON_encode("false");
}



?>