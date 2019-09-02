-- MariaDB dump 10.17  Distrib 10.4.6-MariaDB, for osx10.14 (x86_64)
--
-- Host: localhost    Database: siriexdb
-- ------------------------------------------------------
-- Server version	10.4.6-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `OCCURRENCES`
--

DROP TABLE IF EXISTS `OCCURRENCES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `OCCURRENCES` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `local` varchar(255) NOT NULL,
  `datahora` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `solicitante` varchar(255) NOT NULL,
  `tipoexplosivo` varchar(255) NOT NULL,
  `tipoobjeto` varchar(255) NOT NULL,
  `caracteristicasfisicas` varchar(255) NOT NULL,
  `motivacao` varchar(255) NOT NULL,
  `iis` varchar(255) NOT NULL,
  `metodologia` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `aprovado` tinyint(1) NOT NULL,
  `policial` varchar(255) NOT NULL,
  `administrador` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OCCURRENCES`
--

LOCK TABLES `OCCURRENCES` WRITE;
/*!40000 ALTER TABLE `OCCURRENCES` DISABLE KEYS */;
INSERT INTO `OCCURRENCES` VALUES (1,'Bomba no xaxim','Xaxim','02/04/15','Explosão Bomba','Claudia','C4','Explosivo','Pequeno','Abrir porta','2','Segura','2019-08-14 19:33:47','2019-08-14 19:33:47',1,'gustavo',NULL),(2,'Bomba no Boqueirao','Boqueirao','04/10/19','Explosão Bomba','Claudia','C4','Explosivo','Pequeno','Roubar Vendinha','2','Segura','2019-08-14 19:40:05','2019-08-14 19:40:05',1,'gustavo',NULL),(3,'Teste','Teste','Teste','Teste','Teste','Teste','Teste','Teste','Teste','Teste','Teste','2019-08-14 20:08:09','2019-08-22 21:16:04',1,'gustavo','administrador'),(4,'tete','tete','tete','tete','tete','tete','tete','tete','tete','tete','tete','2019-08-19 20:43:33','2019-08-20 18:45:12',1,'gustavo','administrador');
/*!40000 ALTER TABLE `OCCURRENCES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20190802121952-create-users.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Gustavo','gustavosantoro.9@gmail.com','123456','2019-08-02 13:30:45','2019-08-02 13:30:45',1),(2,'jose','jose@gmail.com','123','2019-08-02 17:13:55','2019-08-02 17:13:55',1),(3,'eddie','eddie@gmail.com','1234','2019-08-06 13:38:32','2019-08-06 13:38:32',1),(4,'geraldine','geraldine@gmail.com','1234','2019-08-06 13:43:53','2019-08-06 13:43:53',1),(5,'hans','hans@gmail.com','1234','2019-08-13 23:19:21','2019-08-13 23:19:21',1);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `terms`
--

DROP TABLE IF EXISTS `terms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `terms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `term` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `letter` char(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terms`
--

LOCK TABLES `terms` WRITE;
/*!40000 ALTER TABLE `terms` DISABLE KEYS */;
INSERT INTO `terms` VALUES (1,'faca na caveira','atirar para matar','2019-08-21 23:07:39','2019-08-21 23:07:39','f'),(2,'Foi pro brejo','Alguem morreu','2019-08-22 17:01:07','2019-08-22 17:01:07','F'),(3,'Ratiou','Deu mole','2019-08-22 17:01:27','2019-08-22 17:01:27','R');
/*!40000 ALTER TABLE `terms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-30 11:27:21
