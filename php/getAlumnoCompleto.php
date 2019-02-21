<?php 

include_once "conexion.php";
include_once 'clases/Alumno.php';
include_once 'clases/Contrato.php';
include_once 'clases/Cursos.php';
include_once 'clases/Estudios.php';
include_once 'clases/Experiencia.php';

global $conn;

$alumno = json_decode($_REQUEST['json']);

$sql = "SELECT * FROM alumno_bolsa a WHERE a.dni='" . $alumno->identificador . "'";

    $resultado=$conn->query($sql);
    
    if ($resultado->num_rows > 0) {
        $filaAlumno = $resultado->fetch_array();

        $sqlExperiencia = "SELECT * FROM experiencia_laboral e WHERE e.dni='" . $filaAlumno['dni'] . "';";
        $resultExperiencia=$conn->query($sqlExperiencia);
        $arrayExperiencia = array();

        if ($resultExperiencia->num_rows > 0) {
            $filaExperiencia = $resultExperiencia->fetch_array();
            
            while ($filaExperiencia) {
                $experiencia = new Experiencia($filaExperiencia["dni"], $filaExperiencia["especialidad"], 
                    $filaExperiencia["empresa"], $filaExperiencia["tiempo"]);
                            
                array_push($arrayExperiencia, $experiencia);
            
                $filaExperiencia= $resultExperiencia->fetch_array();
            }
        }


        $sqlCursos = "SELECT cu.nombre, cu.centro, cu.duracion FROM curso_alumno ca, cursos cu
         WHERE ca.idCurso = cu.id AND ca.dni ='" . $filaAlumno['dni'] . "';";

        $resulCursos=$conn->query($sqlCursos);
        $arrayCursos = array();

        if ($resulCursos->num_rows > 0) {
            $filaCurso = $resulCursos->fetch_array();
            while ($filaCurso) {
                $curso = new Cursos($filaCurso["nombre"], $filaCurso["centro"], 
                    $filaCurso["duracion"]);
                            
                array_push($arrayCursos, $curso);
            
                $filaCurso= $resulCursos->fetch_array();
            }
        }

        $sqlEstudios = "SELECT cu.nombre, cu.nivel, cu.perfil, cu.nombreInstituto FROM curso_centro_alumno ca, cursos_centro cu WHERE ca.idEstCentro = cu.id AND ca.dni ='" . $filaAlumno['dni'] . "';";

        $resultEstudios=$conn->query($sqlEstudios);
        $arrayEstudios = array();

        if ($resultEstudios->num_rows > 0) {
            $filaEstudio = $resultEstudios->fetch_array();
            while ($filaEstudio) {
                $estudio = new Estudios($filaEstudio["nombre"], $filaEstudio["nivel"], 
                    $filaEstudio["perfil"], $filaEstudio["nombreInstituto"]);
                            
                array_push($arrayEstudios, $estudio);
            
                $filaEstudio= $resultEstudios->fetch_array();
            }
        }



        $alumno = new Alumno($filaAlumno["dni"], $filaAlumno["nombre"], $filaAlumno["apellidos"],
                    $filaAlumno["email"], $filaAlumno["residencia"], $filaAlumno["disponibilidadViajar"],
                    $filaAlumno["cambioResidencia"], $filaAlumno["telefono"], $filaAlumno["contratado"]);

        $alumno->setEstudios($arrayEstudios);
        $alumno->setExperiencias($arrayExperiencia);
        $alumno->setCursos($arrayCursos);

        print_r($alumno);
        echo JSON_encode($alumno);
    }else{
        echo JSON_encode($resultado->num_rows);
    }

?>