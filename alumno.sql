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


-- Volcando estructura de base de datos para bd_alumnosproyectocliente_bml
DROP DATABASE IF EXISTS `bd_alumnosproyectocliente_bml`;
CREATE DATABASE IF NOT EXISTS `bd_alumnosproyectocliente_bml` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `bd_alumnosproyectocliente_bml`;

-- Volcando estructura para tabla bd_alumnosproyectocliente_bml.alumnos
DROP TABLE IF EXISTS `alumnos`;
CREATE TABLE IF NOT EXISTS `alumnos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `residencia` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla bd_alumnosproyectocliente_bml.alumnos: ~3 rows (aproximadamente)
DELETE FROM `alumnos`;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
INSERT INTO `alumnos` (`id`, `dni`, `nombre`, `apellidos`, `email`, `residencia`) VALUES
	(1, '48258022c', 'BORJA', 'MATEO LEON', 'b@b.com', 'albacete'),
	(2, '12345678a', 'PEPE', 'PERAS', 'P@P.COM', 'CUENCA'),
	(3, '87654321A', 'PERICO', 'PALOTES', 'peri@peri.com', 'TARAZONA DE LA MANCHA');
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
