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
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.alumno_bolsa: ~3 rows (aproximadamente)
DELETE FROM `alumno_bolsa`;
/*!40000 ALTER TABLE `alumno_bolsa` DISABLE KEYS */;
INSERT INTO `alumno_bolsa` (`id`, `dni`, `nombre`, `apellidos`, `email`, `residencia`, `password`, `temporal`, `disponibilidadViajar`, `cambioResidencia`, `telefono`, `contratado`) VALUES
	(29, '87654321A', 'PERICO', 'PALOTES', 'orbitbml@gmail.com', 'TARAZONA DE LA MANCHA', '123', 'false', 'false', 'false', '', 'false'),
	(30, '48258022c', 'BORJAaaaa', 'MATEO LEON', 'orbitbml@gmail.com', 'CUENCA', '123', 'false', 'true', 'true', '88888999', 'true'),
	(38, '12345678a', 'PEPE', 'PERAS', 'P@P.COM', 'CUENCA', '123', 'false', 'true', 'false', '123456789', 'false');
/*!40000 ALTER TABLE `alumno_bolsa` ENABLE KEYS */;

-- Volcando estructura para tabla bd_bolsatrabajo_dwec.cursos
CREATE TABLE IF NOT EXISTS `cursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `centro` varchar(250) NOT NULL,
  `duracion` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.cursos: ~5 rows (aproximadamente)
DELETE FROM `cursos`;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
INSERT INTO `cursos` (`id`, `nombre`, `centro`, `duracion`) VALUES
	(5, 'ANGULAR', 'WEB', '20'),
	(6, 'HIBERNATE', 'WEB', '180'),
	(7, 'CURSITO', 'NA', '15'),
	(9, 'MAG', 'OCIO', '10'),
	(10, 'ghhg', 'ghgh', '8');
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
  KEY `FK_curso_alumno_alumno_bolsa` (`dni`),
  KEY `FK_curso_alumno_cursos` (`idCurso`),
  CONSTRAINT `FK_curso_alumno_alumno_bolsa` FOREIGN KEY (`dni`) REFERENCES `alumno_bolsa` (`dni`),
  CONSTRAINT `FK_curso_alumno_cursos` FOREIGN KEY (`idCurso`) REFERENCES `cursos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.curso_alumno: ~4 rows (aproximadamente)
DELETE FROM `curso_alumno`;
/*!40000 ALTER TABLE `curso_alumno` DISABLE KEYS */;
INSERT INTO `curso_alumno` (`id`, `dni`, `idCurso`) VALUES
	(5, '48258022c', 5),
	(6, '48258022c', 6),
	(9, '48258022c', 10);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

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
  `idEmpresa` int(11) NOT NULL,
  `fechaAltaEmpleo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dniAlumno_cifEmpresa` (`dniAlumno`,`idEmpresa`),
  KEY `FK_empleadora_empresa` (`idEmpresa`),
  CONSTRAINT `FK_empleadora_alumno_bolsa` FOREIGN KEY (`dniAlumno`) REFERENCES `alumno_bolsa` (`dni`),
  CONSTRAINT `FK_empleadora_empresa` FOREIGN KEY (`idEmpresa`) REFERENCES `empresa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.empleadora: ~1 rows (aproximadamente)
DELETE FROM `empleadora`;
/*!40000 ALTER TABLE `empleadora` DISABLE KEYS */;
INSERT INTO `empleadora` (`id`, `dniAlumno`, `idEmpresa`, `fechaAltaEmpleo`) VALUES
	(8, '48258022c', 16, '2019-02-18 16:19:49');
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.empresa: ~5 rows (aproximadamente)
DELETE FROM `empresa`;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` (`id`, `nombre`, `cif`, `telefono`, `email`, `password`, `direccion`, `persona_contacto`, `temporal`) VALUES
	(15, 'xdafsdf', '44', '666', 'orbitbml@gmail.com', 'LjaEg', 'cantarranas 14', 'asdf', 'true'),
	(16, 'EMPRESA', '55', '96789964', 'orbitbml@gmail.com', '123', 'c calle', 'owawawaowaww', 'false'),
	(17, '66', '66', '666', 'orbitbml@gmail.com', 'LjaEg', 'asdf', 'asdf', 'true'),
	(18, 'EMPRESA BORJA', '69', '96587456', 'info@empresaborja.com', '123', 'c/calle', 'borja', 'false'),
	(20, 'EMPRESILLA', '33', '98547545', 'emp@emp.com', '123', 'cccc', 'borja', 'false');
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_bolsatrabajo_dwec.solicitud: ~32 rows (aproximadamente)
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
	(27, '2019-02-15 17:53:56', '1', 'false', 'false', 0, 16),
	(28, '2019-02-18 09:48:11', '1', 'false', 'false', 5, 16),
	(29, '2019-02-18 09:48:34', '1', 'false', 'true', 5, 16),
	(30, '2019-02-18 09:48:38', '1', 'true', 'true', 5, 16),
	(31, '2019-02-18 11:13:33', '1', 'false', 'true', 5, 16),
	(32, '2019-02-18 11:13:36', '1', 'true', 'true', 5, 16),
	(33, '2019-02-18 11:18:44', '1', 'true', 'true', 5, 16),
	(34, '2019-02-18 11:22:24', '1', 'true', 'true', 5, 16),
	(35, '2019-02-18 11:23:04', '1', 'true', 'true', 2, 16),
	(36, '2019-02-18 11:25:52', '1', 'true', 'true', 3, 16),
	(37, '2019-02-18 11:32:00', '1', 'true', 'true', 10, 16),
	(38, '2019-02-18 11:56:35', '2', 'true', 'true', 10, 16),
	(39, '2019-02-18 11:59:39', '1', 'true', 'true', 10, 16),
	(40, '2019-02-18 12:06:38', '1', 'true', 'true', 0, 16),
	(41, '2019-02-18 12:11:39', '1', 'true', 'true', 2, 16),
	(42, '2019-02-18 16:19:09', '1', 'true', 'true', 5, 16),
	(43, '2019-02-18 16:19:40', '1', 'true', 'true', 5, 16),
	(44, '2019-02-18 16:37:27', '1', 'false', 'false', 5, 16),
	(45, '2019-02-18 16:37:38', '1', 'false', 'false', 5, 16),
	(46, '2019-02-18 16:37:50', '1', 'true', 'true', 5, 16),
	(47, '2019-02-18 16:39:23', '1', 'false', 'false', 0, 16),
	(48, '2019-02-18 16:39:26', '1', 'true', 'true', 0, 16),
	(49, '2019-02-19 13:08:40', '1', 'true', 'false', 0, 16),
	(50, '2019-02-19 13:08:50', '1', 'true', 'true', 0, 16),
	(51, '2019-02-20 20:02:00', '1', 'false', 'true', 10, 16),
	(52, '2019-02-20 20:02:03', '1', 'true', 'true', 10, 16),
	(53, '2019-02-20 20:02:59', '4', 'false', 'false', 1, 16),
	(54, '2019-02-23 09:51:05', '1', 'true', 'true', 1, 16);
/*!40000 ALTER TABLE `solicitud` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
