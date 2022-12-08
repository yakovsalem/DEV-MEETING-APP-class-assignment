-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 06, 2022 at 08:29 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `devmeetingapp`
--
CREATE DATABASE IF NOT EXISTS `devmeetingapp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `devmeetingapp`;

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `id` int(11) NOT NULL,
  `teamId` int(11) NOT NULL,
  `startDateTime` datetime NOT NULL,
  `endDateTime` datetime NOT NULL,
  `description` varchar(50) NOT NULL,
  `room` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `teamId`, `startDateTime`, `endDateTime`, `description`, `room`) VALUES
(1, 3, '2022-12-06 16:51:16', '2022-12-06 17:51:16', 'Building a server architecture', 'Meeting Room C'),
(2, 2, '2022-12-06 16:51:16', '2022-12-06 19:51:16', 'Users screen design', 'Meeting Room B'),
(3, 5, '2022-12-07 16:51:16', '2022-12-07 17:51:16', 'Adaptation of products screen for mobile', 'Meeting Room D'),
(7, 1, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Troubleshoot, debug and upgrade', 'Blue Room'),
(8, 1, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Troubleshoot, debug and upgrade', 'Blue Room'),
(9, 1, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Troubleshoot, debug and upgrade', 'Blue Room'),
(10, 1, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Troubleshoot, debug and upgrade', 'Blue Room'),
(11, 2, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Work with developers on design', 'Blue Room'),
(12, 2, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Work with developers on design', 'Blue Room'),
(13, 2, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Work with developers on design', 'Blue Room'),
(14, 2, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Work with developers on design', 'Blue Room'),
(15, 3, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Complete routes to the new screens', 'Blue Room'),
(16, 3, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Complete routes to the new screens', 'Blue Room'),
(17, 3, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Complete routes to the new screens', 'Blue Room'),
(18, 3, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Complete routes to the new screens', 'Blue Room'),
(19, 4, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Troubleshoot, debug and upgrade', 'Blue Room'),
(20, 4, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Troubleshoot, debug and upgrade', 'Blue Room'),
(21, 4, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Troubleshoot, debug and upgrade', 'Blue Room'),
(22, 5, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Complete routes to the new screens', 'Blue Room'),
(23, 5, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Complete routes to the new screens', 'Blue Room'),
(24, 5, '2022-12-07 21:22:00', '2022-12-07 22:22:00', 'Complete routes to the new screens', 'Blue Room');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `teamId` int(11) NOT NULL,
  `teamName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`teamId`, `teamName`) VALUES
(1, 'UI Team'),
(2, 'Frontend Team'),
(3, 'Backend Team'),
(4, 'React Team'),
(5, 'Mobile Team');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teamId` (`teamId`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`teamId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `teamId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`teamId`) REFERENCES `teams` (`teamId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
