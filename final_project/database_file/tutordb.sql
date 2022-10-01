-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: project1
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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `address_id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `pincode` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'pune','India','344022','maharshtra','tonk road'),(2,'pune','India','344022','maharshtra','tonk road'),(3,'Pune','India','301234','Maharashtra','pune nagar'),(4,'jaipur','India','344022','rajasthan','tonk road'),(5,'Balotra','India','344022','Rajasthan','railway road');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_student`
--

DROP TABLE IF EXISTS `course_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_student` (
  `student_id` int NOT NULL,
  `course_id` int NOT NULL,
  KEY `FKlmsbddqkv96q4nijkrxuof3ug` (`course_id`),
  KEY `FK4xxxkt1m6afc9vxp3ryb0xfhi` (`student_id`),
  CONSTRAINT `FK4xxxkt1m6afc9vxp3ryb0xfhi` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`),
  CONSTRAINT `FKlmsbddqkv96q4nijkrxuof3ug` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_student`
--

LOCK TABLES `course_student` WRITE;
/*!40000 ALTER TABLE `course_student` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_teacher`
--

DROP TABLE IF EXISTS `course_teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_teacher` (
  `teacher_id` int NOT NULL,
  `course_id` int NOT NULL,
  UNIQUE KEY `UK_t6fblykqgqgehumwhvafeojny` (`course_id`),
  KEY `FKsb9lnio7h0a885b871ogw0ajg` (`teacher_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_teacher`
--

LOCK TABLES `course_teacher` WRITE;
/*!40000 ALTER TABLE `course_teacher` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `course_id` int NOT NULL AUTO_INCREMENT,
  `course_about` varchar(255) DEFAULT NULL,
  `course_category` varchar(255) DEFAULT NULL,
  `course_duration` int NOT NULL,
  `course_end_date` date DEFAULT NULL,
  `course_end_time` time DEFAULT NULL,
  `course_fee` int NOT NULL,
  `course_max_strenth` int NOT NULL,
  `course_name` varchar(255) DEFAULT NULL,
  `course_start_date` date DEFAULT NULL,
  `course_start_time` time DEFAULT NULL,
  `course_student_count` int DEFAULT '0',
  `course_teacher_id` int NOT NULL,
  `teacher_id` int DEFAULT NULL,
  PRIMARY KEY (`course_id`),
  KEY `FK6uqpeilogmdax173ql7l7cua0` (`teacher_id`),
  CONSTRAINT `FK6uqpeilogmdax173ql7l7cua0` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'course will contain complete course','java',1,'2022-10-21','04:00:00',10000,30,'core java','2022-09-21','02:00:00',0,1,NULL),(2,'this course will contain web based technology using java','web-based-java',1,'2022-10-23','11:30:00',7000,30,'WPT','2022-09-23','10:00:00',1,1,NULL),(3,'basics linux command ','OS',1,'2022-10-22','14:00:00',90000,30,'Linux','2022-09-22','13:00:00',1,1,NULL),(4,'advance java','maths',2,'2022-10-20','07:00:00',600,34,'WPT','2022-09-24','04:01:00',1,1,NULL);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` varchar(255) NOT NULL,
  `data` longblob,
  `name` varchar(255) DEFAULT NULL,
  `teacher` int NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `course1_id` int NOT NULL,
  `student1_id` int NOT NULL,
  PRIMARY KEY (`course1_id`,`student1_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (2,1),(3,1),(4,1);
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `course_registration` AFTER INSERT ON `registration` FOR EACH ROW BEGIN  
update courses set course_student_count=(course_student_count+1) where course_id=new.course1_id;  
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `courseid` int NOT NULL,
  `fifth_rating` int NOT NULL,
  `first_rating` int NOT NULL,
  `fourth_rating` int NOT NULL,
  `second_rating` int NOT NULL,
  `studentid` int NOT NULL,
  `third_rating` int NOT NULL,
  PRIMARY KEY (`review_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,4,4,4,4,1,3),(2,2,4,5,4,4,1,4);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `student_email` varchar(255) DEFAULT NULL,
  `student_fname` varchar(255) DEFAULT NULL,
  `student_gender` varchar(255) DEFAULT NULL,
  `student_lname` varchar(255) DEFAULT NULL,
  `student_mobile` varchar(255) DEFAULT NULL,
  `student_password` varchar(255) DEFAULT NULL,
  `student_username` varchar(255) DEFAULT NULL,
  `student_dob` date DEFAULT NULL,
  `address_address_id` int DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  KEY `FKnipsy8d8ys1hk9s4ehyk2t7wi` (`address_address_id`),
  CONSTRAINT `FKnipsy8d8ys1hk9s4ehyk2t7wi` FOREIGN KEY (`address_address_id`) REFERENCES `address` (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'student1@gmail.com','student123','male','iet','9876543210','Student1@','student1','2022-09-16',1),(2,'student2@gmail.com','student2','female','iet','9876543120','Student2@','student2','1998-06-17',3),(4,'student3@gmail.com','student3','male','iet','9234567812','Student3@','student3','2022-09-23',5);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher` (
  `teacher_id` int NOT NULL AUTO_INCREMENT,
  `teacher_about` varchar(255) DEFAULT NULL,
  `teacher_email` varchar(255) DEFAULT NULL,
  `teacher_experience` int NOT NULL,
  `teacher_fname` varchar(255) DEFAULT NULL,
  `teacher_gender` varchar(255) DEFAULT NULL,
  `teacher_lname` varchar(255) DEFAULT NULL,
  `teacher_mobile` varchar(255) DEFAULT NULL,
  `teacher_password` varchar(255) DEFAULT NULL,
  `teacher_qualification` varchar(255) DEFAULT NULL,
  `teacher_username` varchar(255) DEFAULT NULL,
  `address_address_id` int DEFAULT NULL,
  PRIMARY KEY (`teacher_id`),
  KEY `FKht7uva3ceeix2q2bp2kmscd24` (`address_address_id`),
  CONSTRAINT `FKht7uva3ceeix2q2bp2kmscd24` FOREIGN KEY (`address_address_id`) REFERENCES `address` (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES (1,'having experience in teaching java for almost 7 years','teacher1@gmail.com',7,'Dilip','male','iet','9876543210','Teacher1@','B-tech','teacher1',2),(2,'2 years of experience in teaching physics','teacher2@gmail.com',2,'teacher2','male','iet','9123123112','Teacher2@','bsc','teacher2',4);
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-01 20:56:45
