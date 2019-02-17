-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.1.31-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para bd_bolsatrabajo_dwec
CREATE DATABASE IF NOT EXISTS `bd_bolsatrabajo_dwec` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `bd_bolsatrabajo_dwec`;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.alumno_bolsa
CREATE TABLE IF NOT EXISTS `alumno_bolsa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `residencia` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `temporal` varchar(50) NOT NULL DEFAULT 'true',
  `disponibilidadViajar` varchar(50) NOT NULL,
  `cambioResidencia` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.alumno_bolsa: ~3 rows (aproximadamente)
DELETE FROM `alumno_bolsa`;
/*!40000 ALTER TABLE `alumno_bolsa` DISABLE KEYS */;
INSERT INTO `alumno_bolsa` (`id`, `dni`, `nombre`, `apellidos`, `email`, `residencia`, `password`, `temporal`, `disponibilidadViajar`, `cambioResidencia`, `telefono`) VALUES
	(29, '87654321A', 'PERICO', 'PALOTES', 'orbitbml@gmail.com', 'TARAZONA DE LA MANCHA', '1456', 'false', 'false', 'false', ''),
	(30, '48258022c', 'BORJAaaaa', 'MATEO LEON', 'b@b.com', 'CUENCA', '123', 'false', 'true', 'true', '88888999'),
	(38, '12345678a', 'PEPE', 'PERAS', 'P@P.COM', 'CUENCA', '123', 'false', 'true', 'false', '123456789');
/*!40000 ALTER TABLE `alumno_bolsa` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.cursos
CREATE TABLE IF NOT EXISTS `cursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `centro` varchar(250) NOT NULL,
  `duracion` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.cursos: ~3 rows (aproximadamente)
DELETE FROM `cursos`;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
INSERT INTO `cursos` (`id`, `nombre`, `centro`, `duracion`) VALUES
	(5, 'ANGULAR', 'WEB', '20'),
	(6, 'HIBERNATE', 'WEB', '180'),
	(7, 'CURSITO', 'NA', '15');
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.cursos_centro
CREATE TABLE IF NOT EXISTS `cursos_centro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(300) NOT NULL,
  `nivel` varchar(50) NOT NULL,
  `perfil` varchar(50) NOT NULL,
  `nombreInstituto` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.cursos_centro: ~4 rows (aproximadamente)
DELETE FROM `cursos_centro`;
/*!40000 ALTER TABLE `cursos_centro` DISABLE KEYS */;
INSERT INTO `cursos_centro` (`id`, `nombre`, `nivel`, `perfil`, `nombreInstituto`) VALUES
	(1, 'DESARROLLO DE APLICACIONES WEB', 'SUPERIOR', 'INFORMATICA', 'IES LEONARDO DA VINCI'),
	(2, 'DESARROLLO DE APLICACIONES MULTIPLATAFORMA', 'SUPERIOR', 'INFORMATICA', 'IES LEONARDO DA VINCI'),
	(3, 'ADMINISTRACION Y FINANZAS', 'MEDIO', 'ADMINISTRACION', 'IES LEONARDO DA VINCI'),
	(4, 'ADMINISTRACION Y FINANZAS 2', 'SUPERIOR', 'ADMINISTRACION', 'IES LEONARDO DA VINCI');
/*!40000 ALTER TABLE `cursos_centro` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.curso_alumno
CREATE TABLE IF NOT EXISTS `curso_alumno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(50) NOT NULL,
  `idCurso` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_curso_alumno_alumno_bolsa` (`dni`),
  KEY `FK_curso_alumno_cursos` (`idCurso`),
  CONSTRAINT `FK_curso_alumno_alumno_bolsa` FOREIGN KEY (`dni`) REFERENCES `alumno_bolsa` (`dni`),
  CONSTRAINT `FK_curso_alumno_cursos` FOREIGN KEY (`idCurso`) REFERENCES `cursos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.curso_alumno: ~2 rows (aproximadamente)
DELETE FROM `curso_alumno`;
/*!40000 ALTER TABLE `curso_alumno` DISABLE KEYS */;
INSERT INTO `curso_alumno` (`id`, `dni`, `idCurso`) VALUES
	(5, '48258022c', 5),
	(6, '48258022c', 6);
/*!40000 ALTER TABLE `curso_alumno` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.curso_centro_alumno
CREATE TABLE IF NOT EXISTS `curso_centro_alumno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(50) NOT NULL,
  `idEstCentro` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_curso_centro_alumno_alumno_bolsa` (`dni`),
  KEY `FK_curso_centro_alumno_cursos_centro` (`idEstCentro`),
  CONSTRAINT `FK_curso_centro_alumno_alumno_bolsa` FOREIGN KEY (`dni`) REFERENCES `alumno_bolsa` (`dni`),
  CONSTRAINT `FK_curso_centro_alumno_cursos_centro` FOREIGN KEY (`idEstCentro`) REFERENCES `cursos_centro` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.curso_centro_alumno: ~2 rows (aproximadamente)
DELETE FROM `curso_centro_alumno`;
/*!40000 ALTER TABLE `curso_centro_alumno` DISABLE KEYS */;
INSERT INTO `curso_centro_alumno` (`id`, `dni`, `idEstCentro`) VALUES
	(5, '48258022c', 2),
	(6, '48258022c', 1);
/*!40000 ALTER TABLE `curso_centro_alumno` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.empleadora
CREATE TABLE IF NOT EXISTS `empleadora` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dniAlumno` varchar(100) NOT NULL,
  `cifEmpresa` varchar(100) NOT NULL,
  `fechaAltaEmpleo` int(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dniAlumno_cifEmpresa` (`dniAlumno`,`cifEmpresa`),
  KEY `FK_empleadora_empresa` (`cifEmpresa`),
  CONSTRAINT `FK_empleadora_alumno_bolsa` FOREIGN KEY (`dniAlumno`) REFERENCES `alumno_bolsa` (`dni`),
  CONSTRAINT `FK_empleadora_empresa` FOREIGN KEY (`cifEmpresa`) REFERENCES `empresa` (`cif`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.empleadora: ~0 rows (aproximadamente)
DELETE FROM `empleadora`;
/*!40000 ALTER TABLE `empleadora` DISABLE KEYS */;
/*!40000 ALTER TABLE `empleadora` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.empresa
CREATE TABLE IF NOT EXISTS `empresa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(300) NOT NULL,
  `cif` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `persona_contacto` varchar(100) NOT NULL,
  `temporal` varchar(50) NOT NULL DEFAULT 'true',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cif` (`cif`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.empresa: ~3 rows (aproximadamente)
DELETE FROM `empresa`;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` (`id`, `nombre`, `cif`, `telefono`, `email`, `password`, `direccion`, `persona_contacto`, `temporal`) VALUES
	(15, 'xdafsdf', '44', '666', 'orbitbml@gmail.com', '123', 'cantarranas 14', 'asdf', 'false'),
	(16, '55', '55', '96789964', 'orbitbml@gmail.com', '123', 'c calle', 'yo', 'false'),
	(17, '66', '66', '666', 'orbitbml@gmail.com', '123', 'asdf', 'asdf', 'false');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.experiencia_laboral
CREATE TABLE IF NOT EXISTS `experiencia_laboral` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(50) NOT NULL,
  `especialidad` varchar(200) NOT NULL,
  `empresa` varchar(200) NOT NULL,
  `tiempo` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_experiencia_laboral_alumno_bolsa` (`dni`),
  CONSTRAINT `FK_experiencia_laboral_alumno_bolsa` FOREIGN KEY (`dni`) REFERENCES `alumno_bolsa` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.experiencia_laboral: ~2 rows (aproximadamente)
DELETE FROM `experiencia_laboral`;
/*!40000 ALTER TABLE `experiencia_laboral` DISABLE KEYS */;
INSERT INTO `experiencia_laboral` (`id`, `dni`, `especialidad`, `empresa`, `tiempo`) VALUES
	(5, '48258022c', 'PROGRAMACION', 'ORBIT', 12),
	(6, '48258022c', 'CAMARERO', 'LOGOMA', 4);
/*!40000 ALTER TABLE `experiencia_laboral` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.solicitud
CREATE TABLE IF NOT EXISTS `solicitud` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `perfil` varchar(300) NOT NULL,
  `viajar` varchar(10) NOT NULL,
  `cambio_residencia` varchar(10) NOT NULL,
  `experiencia` int(11) NOT NULL DEFAULT '0',
  `idEmpresa` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_solicitud_empresa` (`idEmpresa`),
  CONSTRAINT `FK_solicitud_empresa` FOREIGN KEY (`idEmpresa`) REFERENCES `empresa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.solicitud: ~10 rows (aproximadamente)
DELETE FROM `solicitud`;
/*!40000 ALTER TABLE `solicitud` DISABLE KEYS */;
INSERT INTO `solicitud` (`id`, `fecha`, `perfil`, `viajar`, `cambio_residencia`, `experiencia`, `idEmpresa`) VALUES
	(18, '2019-02-14 10:15:10', '1', 'true', 'false', 5, 15),
	(19, '2019-02-14 10:17:37', '1', 'false', 'true', 0, 16),
	(20, '2019-02-14 10:20:53', '1', 'false', 'false', 0, 17),
	(21, '2019-02-14 10:54:32', '1', 'false', 'false', 0, 16),
	(22, '2019-02-14 10:55:47', '1', 'false', 'false', 0, 16),
	(23, '2019-02-14 10:57:33', '1', 'false', 'false', 0, 16),
	(24, '2019-02-14 11:11:14', '1', 'false', 'true', 10, 15),
	(25, '2019-02-14 12:16:15', '1', 'false', 'false', 0, 15),
	(26, '2019-02-14 12:16:55', '1', 'false', 'false', 0, 15),
	(27, '2019-02-15 17:53:56', '1', 'false', 'false', 0, 16);
/*!40000 ALTER TABLE `solicitud` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
