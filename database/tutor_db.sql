-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: tutordb
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address_info_tbl`
--

DROP TABLE IF EXISTS `address_info_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address_info_tbl` (
  `address_id` int NOT NULL,
  `street` varchar(100) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `pincode` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address_info_tbl`
--

LOCK TABLES `address_info_tbl` WRITE;
/*!40000 ALTER TABLE `address_info_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `address_info_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_info_tbl`
--

DROP TABLE IF EXISTS `course_info_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_info_tbl` (
  `course_id` int NOT NULL,
  `teacher_id` int DEFAULT NULL,
  `course_about` varchar(250) DEFAULT NULL,
  `course_category` varchar(50) DEFAULT NULL,
  `course_duration` int DEFAULT NULL,
  `course_start_date` date DEFAULT NULL,
  `course_end_date` date DEFAULT NULL,
  `course_name` varchar(100) DEFAULT NULL,
  `course_max_strength` int DEFAULT NULL,
  `course_fees` int DEFAULT NULL,
  `course_start_time` time DEFAULT NULL,
  `course_end_tine` time DEFAULT NULL,
  PRIMARY KEY (`course_id`),
  KEY `teacher_id` (`teacher_id`),
  CONSTRAINT `course_info_tbl_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher_info_tbl` (`teacher_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_info_tbl`
--

LOCK TABLES `course_info_tbl` WRITE;
/*!40000 ALTER TABLE `course_info_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_info_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_review_tbl`
--

DROP TABLE IF EXISTS `course_review_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_review_tbl` (
  `course_id` int DEFAULT NULL,
  `student_id` int DEFAULT NULL,
  `rating_for_first` int DEFAULT NULL,
  `rating_for_second` int DEFAULT NULL,
  `rating_for_third` int DEFAULT NULL,
  `rating_for_fourth` int DEFAULT NULL,
  `rating_for_fifth` int DEFAULT NULL,
  KEY `course_id` (`course_id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `course_review_tbl_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course_info_tbl` (`course_id`),
  CONSTRAINT `course_review_tbl_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `student_info_tbl` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_review_tbl`
--

LOCK TABLES `course_review_tbl` WRITE;
/*!40000 ALTER TABLE `course_review_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_review_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_course_join_tbl`
--

DROP TABLE IF EXISTS `student_course_join_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_course_join_tbl` (
  `student_id` int DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  KEY `course_id` (`course_id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `student_course_join_tbl_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course_info_tbl` (`course_id`),
  CONSTRAINT `student_course_join_tbl_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `student_info_tbl` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_course_join_tbl`
--

LOCK TABLES `student_course_join_tbl` WRITE;
/*!40000 ALTER TABLE `student_course_join_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_course_join_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_info_tbl`
--

DROP TABLE IF EXISTS `student_info_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_info_tbl` (
  `student_id` int NOT NULL,
  `student_firstname` varchar(45) DEFAULT NULL,
  `student_lastname` varchar(45) DEFAULT NULL,
  `student_mobile` varchar(20) DEFAULT NULL,
  `student_dob` date DEFAULT NULL,
  `student_gender` varchar(45) DEFAULT NULL,
  `student_username` varchar(45) DEFAULT NULL,
  `student_password` varchar(45) DEFAULT NULL,
  `student_email_id` varchar(45) DEFAULT NULL,
  `address_id` int DEFAULT NULL,
  `student_profile` blob,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `student_mobile_UNIQUE` (`student_mobile`),
  UNIQUE KEY `student_emailid_UNIQUE` (`student_email_id`),
  UNIQUE KEY `student_username_UNIQUE` (`student_username`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `student_info_tbl_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `address_info_tbl` (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_info_tbl`
--

LOCK TABLES `student_info_tbl` WRITE;
/*!40000 ALTER TABLE `student_info_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_info_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher_info_tbl`
--

DROP TABLE IF EXISTS `teacher_info_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher_info_tbl` (
  `teacher_id` int NOT NULL,
  `teacher_firstname` varchar(45) DEFAULT NULL,
  `teacher_lastname` varchar(45) DEFAULT NULL,
  `teacher_mobile` varchar(20) DEFAULT NULL,
  `teacher_gender` varchar(45) DEFAULT NULL,
  `teacher_username` varchar(45) DEFAULT NULL,
  `teacher_password` varchar(45) DEFAULT NULL,
  `teacher_email_id` varchar(45) DEFAULT NULL,
  `teacher_qualification` varchar(45) DEFAULT NULL,
  `teacher_experience` int DEFAULT NULL,
  `teacher_about` varchar(150) DEFAULT NULL,
  `address_id` int DEFAULT NULL,
  `teacher_profile` blob,
  PRIMARY KEY (`teacher_id`),
  UNIQUE KEY `teacher_email_id_UNIQUE` (`teacher_email_id`),
  UNIQUE KEY `teacher_username_UNIQUE` (`teacher_username`),
  UNIQUE KEY `teacher_mobile_UNIQUE` (`teacher_mobile`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `teacher_info_tbl_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `address_info_tbl` (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher_info_tbl`
--

LOCK TABLES `teacher_info_tbl` WRITE;
/*!40000 ALTER TABLE `teacher_info_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `teacher_info_tbl` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-07 16:01:13
