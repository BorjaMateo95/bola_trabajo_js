<?php

$servername = "localhost";
$dbname = "bd_alumnosproyectocliente_bml";
$password = "root";
$username = "root";


@ $conn = new mysqli($servername, $username, "", $dbname);
$error = $conn->connect_errno;
$conn->set_charset("utf8");

if ($error != null) {
    echo "<p>Error $error conectando a la base de datos:
    $conn->connect_error</p>";
    exit();
}