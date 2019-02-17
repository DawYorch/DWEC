-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-01-2019 a las 16:10:35
-- Versión del servidor: 10.1.9-MariaDB
-- Versión de PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `drag_drop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banquillo`
--

CREATE TABLE `banquillo` (
  `codigoJ` int(4) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `demarcacion` varchar(10) NOT NULL,
  `localizacion` varchar(50) DEFAULT NULL,
  `codigoE` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `banquillo`
--

INSERT INTO `banquillo` (`codigoJ`, `nombre`, `demarcacion`, `localizacion`, `codigoE`) VALUES
(1, 'Romario', 'DEL', NULL, NULL),
(2, 'Kempes', 'DEL', NULL, NULL),
(3, 'Suker', 'DEL', NULL, NULL),
(5, 'Beckham', 'MED', NULL, NULL),
(7, 'Zamorano', 'DEL', NULL, NULL),
(9, 'Leonardo', 'MED', NULL, NULL),
(10, 'Redondo', 'MED', NULL, NULL),
(11, 'Ayala', 'DEF', NULL, NULL),
(12, 'Hierro', 'DEF', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `codigoE` int(4) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `ciudad` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`codigoE`, `nombre`, `ciudad`) VALUES
(1, 'VCF', 'Valencia'),
(2, 'FCB', 'Barcelona'),
(3, 'RM', 'Madrid'),
(4, 'SCF', 'Sevilla');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `banquillo`
--
ALTER TABLE `banquillo`
  ADD PRIMARY KEY (`codigoJ`),
  ADD KEY `codigoE` (`codigoE`);

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`codigoE`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `banquillo`
--
ALTER TABLE `banquillo`
  MODIFY `codigoJ` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `banquillo`
--
ALTER TABLE `banquillo`
  ADD CONSTRAINT `banquillo_ibfk_1` FOREIGN KEY (`codigoE`) REFERENCES `equipos` (`codigoE`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
