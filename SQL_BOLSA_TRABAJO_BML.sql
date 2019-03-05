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

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.administrador
CREATE TABLE IF NOT EXISTS `administrador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.administrador: ~0 rows (aproximadamente)
DELETE FROM `administrador`;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` (`id`, `usuario`, `password`) VALUES
	(1, 'admin', 'admin');
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;

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
  `contratado` varchar(50) NOT NULL DEFAULT 'false',
  `ultima_entrada` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.alumno_bolsa: ~0 rows (aproximadamente)
DELETE FROM `alumno_bolsa`;
/*!40000 ALTER TABLE `alumno_bolsa` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumno_bolsa` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.alumno_bolsa_backup
CREATE TABLE IF NOT EXISTS `alumno_bolsa_backup` (
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
  `contratado` varchar(50) NOT NULL DEFAULT 'false',
  `ultima_entrada` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.alumno_bolsa_backup: ~1 rows (aproximadamente)
DELETE FROM `alumno_bolsa_backup`;
/*!40000 ALTER TABLE `alumno_bolsa_backup` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumno_bolsa_backup` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.cursos
CREATE TABLE IF NOT EXISTS `cursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `centro` varchar(250) NOT NULL,
  `duracion` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2702 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.cursos: ~1 rows (aproximadamente)
DELETE FROM `cursos`;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.cursos_centro
CREATE TABLE IF NOT EXISTS `cursos_centro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(300) NOT NULL,
  `nivel` varchar(50) NOT NULL,
  `perfil` varchar(50) NOT NULL,
  `nombreInstituto` varchar(50) NOT NULL,
  `abreviatura` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.cursos_centro: ~4 rows (aproximadamente)
DELETE FROM `cursos_centro`;
/*!40000 ALTER TABLE `cursos_centro` DISABLE KEYS */;
INSERT INTO `cursos_centro` (`id`, `nombre`, `nivel`, `perfil`, `nombreInstituto`, `abreviatura`) VALUES
	(1, 'DESARROLLO DE APLICACIONES WEB', 'SUPERIOR', 'INFORMATICA', 'IES LEONARDO DA VINCI', 'DAW'),
	(2, 'DESARROLLO DE APLICACIONES MULTIPLATAFORMA', 'SUPERIOR', 'INFORMATICA', 'IES LEONARDO DA VINCI', 'DAM'),
	(3, 'ADMINISTRACION Y FINANZAS', 'MEDIO', 'ADMINISTRACION', 'IES LEONARDO DA VINCI', 'AD 1'),
	(4, 'ADMINISTRACION Y FINANZAS 2', 'SUPERIOR', 'ADMINISTRACION', 'IES LEONARDO DA VINCI', 'AD 2');
/*!40000 ALTER TABLE `cursos_centro` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.curso_alumno
CREATE TABLE IF NOT EXISTS `curso_alumno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(50) NOT NULL,
  `idCurso` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_curso_alumno_cursos` (`idCurso`),
  KEY `FK_curso_alumno_alumno_bolsa` (`dni`),
  CONSTRAINT `FK_curso_alumno_alumno_bolsa` FOREIGN KEY (`dni`) REFERENCES `alumno_bolsa` (`dni`) ON DELETE CASCADE,
  CONSTRAINT `FK_curso_alumno_cursos` FOREIGN KEY (`idCurso`) REFERENCES `cursos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2700 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.curso_alumno: ~0 rows (aproximadamente)
DELETE FROM `curso_alumno`;
/*!40000 ALTER TABLE `curso_alumno` DISABLE KEYS */;
/*!40000 ALTER TABLE `curso_alumno` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.curso_centro_alumno
CREATE TABLE IF NOT EXISTS `curso_centro_alumno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(50) NOT NULL,
  `idEstCentro` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_curso_centro_alumno_cursos_centro` (`idEstCentro`),
  KEY `FK_curso_centro_alumno_alumno_bolsa` (`dni`),
  CONSTRAINT `FK_curso_centro_alumno_alumno_bolsa` FOREIGN KEY (`dni`) REFERENCES `alumno_bolsa` (`dni`) ON DELETE CASCADE,
  CONSTRAINT `FK_curso_centro_alumno_cursos_centro` FOREIGN KEY (`idEstCentro`) REFERENCES `cursos_centro` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.curso_centro_alumno: ~0 rows (aproximadamente)
DELETE FROM `curso_centro_alumno`;
/*!40000 ALTER TABLE `curso_centro_alumno` DISABLE KEYS */;
/*!40000 ALTER TABLE `curso_centro_alumno` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.empleadora
CREATE TABLE IF NOT EXISTS `empleadora` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dniAlumno` varchar(100) NOT NULL,
  `idEmpresa` int(11) NOT NULL,
  `fechaAltaEmpleo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dniAlumno_cifEmpresa` (`dniAlumno`,`idEmpresa`),
  KEY `FK_empleadora_empresa` (`idEmpresa`),
  CONSTRAINT `FK_empleadora_alumno_bolsa` FOREIGN KEY (`dniAlumno`) REFERENCES `alumno_bolsa` (`dni`) ON DELETE CASCADE,
  CONSTRAINT `FK_empleadora_empresa` FOREIGN KEY (`idEmpresa`) REFERENCES `empresa` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

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
  `ultima_entrada` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cif` (`cif`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.empresa: ~4 rows (aproximadamente)
DELETE FROM `empresa`;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.empresa_backup
CREATE TABLE IF NOT EXISTS `empresa_backup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(300) NOT NULL,
  `cif` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `persona_contacto` varchar(100) NOT NULL,
  `temporal` varchar(50) NOT NULL DEFAULT 'true',
  `ultima_entrada` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cif` (`cif`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.empresa_backup: ~1 rows (aproximadamente)
DELETE FROM `empresa_backup`;
/*!40000 ALTER TABLE `empresa_backup` DISABLE KEYS */;
/*!40000 ALTER TABLE `empresa_backup` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.experiencia_laboral
CREATE TABLE IF NOT EXISTS `experiencia_laboral` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(50) NOT NULL,
  `especialidad` varchar(200) NOT NULL,
  `empresa` varchar(200) NOT NULL,
  `tiempo` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_experiencia_laboral_alumno_bolsa` (`dni`),
  CONSTRAINT `FK_experiencia_laboral_alumno_bolsa` FOREIGN KEY (`dni`) REFERENCES `alumno_bolsa` (`dni`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.experiencia_laboral: ~0 rows (aproximadamente)
DELETE FROM `experiencia_laboral`;
/*!40000 ALTER TABLE `experiencia_laboral` DISABLE KEYS */;
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
  CONSTRAINT `FK_solicitud_empresa` FOREIGN KEY (`idEmpresa`) REFERENCES `empresa` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.solicitud: ~34 rows (aproximadamente)
DELETE FROM `solicitud`;
/*!40000 ALTER TABLE `solicitud` DISABLE KEYS */;
/*!40000 ALTER TABLE `solicitud` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
