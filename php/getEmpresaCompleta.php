<?php 

include_once "conexion.php";
include_once 'clases/Empresa.php';
include_once 'clases/Contrato.php';
include_once 'clases/Solicitud.php';

global $conn;

$empresa = json_decode($_REQUEST['json']);

$sql = "SELECT * FROM empresa e WHERE e.cif='" . $empresa->identificador . "'";

    $resultado=$conn->query($sql);
    
    if ($resultado->num_rows > 0) {
        $filaEmpresa = $resultado->fetch_array();

        $sqlSolicitud = "SELECT * FROM solicitud s WHERE s.idEmpresa=" . $filaEmpresa['id'] . ";";
        $resultadoSolicitud=$conn->query($sqlSolicitud);
        $arraySolicitud = array();

        if ($resultadoSolicitud->num_rows > 0) {
            $filaSolicitud = $resultadoSolicitud->fetch_array();
            
            while ($filaSolicitud) {
                $solicitud = new Solicitud($filaSolicitud["fecha"], $filaSolicitud["perfil"], 
                    $filaSolicitud["viajar"], $filaSolicitud["cambio_residencia"], 
                    $filaSolicitud["experiencia"], $filaSolicitud["idEmpresa"]);
                            
                array_push($arraySolicitud, $solicitud);
            
                $filaSolicitud= $resultadoSolicitud->fetch_array();
            }
        }


        $sqlContrato = "SELECT * FROM empleadora e WHERE e.idEmpresa=" . $filaEmpresa['id'] . ";";
        $resulContrato=$conn->query($sqlContrato);
        $arrayContrato = array();

        if ($resulContrato->num_rows > 0) {
            $filaContrato = $resulContrato->fetch_array();
            while ($filaContrato) {
                $solicitud = new Contrato($filaContrato["dniAlumno"], $filaContrato["idEmpresa"], 
                    $filaContrato["fechaAltaEmpleo"]);
                            
                array_push($arrayContrato, $solicitud);
            
                $filaContrato= $resulContrato->fetch_array();
            }
        }

        $empresa = new Empresa($filaEmpresa["cif"], $filaEmpresa["nombre"], $filaEmpresa["telefono"],
                    $filaEmpresa["email"], $filaEmpresa["direccion"], $filaEmpresa["persona_contacto"]);
        $empresa->setArraySolicitudes($arraySolicitud);
        $empresa->setArratContratos($arrayContrato);

        echo JSON_encode($empresa);
    }else{
        echo JSON_encode($resultado->num_rows);
    }

?>