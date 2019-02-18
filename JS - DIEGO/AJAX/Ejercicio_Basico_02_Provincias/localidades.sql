-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 03, 2018 at 07:36 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id8062506_localidades`
--

-- --------------------------------------------------------

--
-- Table structure for table `MUNICIPIOS`
--

CREATE TABLE `MUNICIPIOS` (
  `idMunicipio` int(20) NOT NULL,
  `Nombre` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `idProvincia` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `MUNICIPIOS`
--

INSERT INTO `MUNICIPIOS` (`idMunicipio`, `Nombre`, `idProvincia`) VALUES
(18210, 'Peligros', 18),
(18410, 'Carataunas', 18),
(18420, 'Lanjarón', 18),
(18518, 'Cogollos de Guadix', 18),
(28250, 'Torrelodones', 28),
(28293, 'Zarzalejo', 28),
(28409, 'Alpedrete', 28),
(28530, 'Morata de Tajuña', 28),
(46109, 'Cheste', 46),
(46440, 'Almussafes', 46),
(46469, 'Beniparrell', 46),
(46470, 'Massanassa', 46);

-- --------------------------------------------------------

--
-- Table structure for table `PROVINCIAS`
--

CREATE TABLE `PROVINCIAS` (
  `idProvincia` int(20) NOT NULL,
  `Nombre` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `PROVINCIAS`
--

INSERT INTO `PROVINCIAS` (`idProvincia`, `Nombre`) VALUES
(18, 'Granada'),
(28, 'Madrid'),
(46, 'Valencia');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `MUNICIPIOS`
--
ALTER TABLE `MUNICIPIOS`
  ADD PRIMARY KEY (`idMunicipio`),
  ADD KEY `Foranea` (`idProvincia`);

--
-- Indexes for table `PROVINCIAS`
--
ALTER TABLE `PROVINCIAS`
  ADD PRIMARY KEY (`idProvincia`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `MUNICIPIOS`
--
ALTER TABLE `MUNICIPIOS`
  ADD CONSTRAINT `Foranea` FOREIGN KEY (`idProvincia`) REFERENCES `PROVINCIAS` (`idProvincia`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
