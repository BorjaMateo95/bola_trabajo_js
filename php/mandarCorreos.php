<?php

    include_once 'conexion.php';
    include_once 'enviaCorreo.php';
    
    global $conn;

    $obj = json_decode($_REQUEST['json']);

    if($obj->tipo == "alumno"){
            $orden="SELECT * FROM alumno_bolsa WHERE ultima_entrada <= ADDDATE(CURDATE(), -365)";
            $resultado=$conn->query($orden);      

            if($resultado->num_rows>0){
                
                $fila=$resultado->fetch_array();

                while($fila){

                    mandaCorreo($fila["email"], "Bolsa Trabajo", "<h3>Hola, " . $fila["nombre"] . "</h3><br>LLeva mas de 1 año sin entrar a la bolsa de Trabajo,
                        si quiere seguir debe entrar y actualizar sus datos. <br>Un saludo!<br>Bolsa Trabajo");

                    $fila=$resultado->fetch_array();

                }

            }

        }else{         
            $orden="SELECT * FROM empresa WHERE ultima_entrada <= ADDDATE(CURDATE(), -170)";
            $resultado=$conn->query($orden);      

            if($resultado->num_rows>0){
                
                $fila=$resultado->fetch_array();

                while($fila){

                    mandaCorreo($fila["email"], "Bolsa Trabajo", "<h3>Hola, " . $fila["nombre"] . "</h3><br>LLeva mas de 6 meses sin entrar a la bolsa de Trabajo,
                        si quiere seguir debe entrar y actualizar sus datos. <br>Un saludo!<br>Bolsa Trabajo");

                    $fila=$resultado->fetch_array();

                }

            }

        }
            
?>