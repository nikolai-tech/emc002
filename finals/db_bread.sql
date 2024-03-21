-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2024 at 12:52 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_bread`
--

-- --------------------------------------------------------

--
-- Table structure for table `checkout`
--

CREATE TABLE `checkout` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `quantity` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `checkout`
--

INSERT INTO `checkout` (`order_id`, `user_id`, `order_date`, `quantity`, `product_id`, `price`) VALUES
(37, 1, '2024-03-21 09:48:21', 5, 6, 50.00),
(38, 1, '2024-03-21 09:48:21', 2, 7, 10.00),
(40, 1, '2024-03-21 09:55:12', 3, 2, 75.00),
(41, 1, '2024-03-21 09:55:12', 2, 1, 10.00),
(43, 1, '2024-03-21 09:55:21', 3, 2, 75.00),
(44, 1, '2024-03-21 09:55:21', 2, 1, 10.00),
(46, 1, '2024-03-21 09:57:27', 10, 4, 80.00),
(47, 1, '2024-03-21 09:57:27', 2, 5, 140.00);

-- --------------------------------------------------------

--
-- Table structure for table `loginregister`
--

CREATE TABLE `loginregister` (
  `user_id` int(11) NOT NULL,
  `email` varchar(55) NOT NULL,
  `pw` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `loginregister`
--

INSERT INTO `loginregister` (`user_id`, `email`, `pw`) VALUES
(1, 'user1@gmail.com', '$2y$10$gP9KNwjabe32QCzDLA/TdOFFYjsspCAU9YO5yYYz8/f5gkLMe2.0K');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `item_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`item_id`, `order_id`, `product_id`, `product_name`, `quantity`, `price`) VALUES
(8, NULL, 1, 'Pandesal', 196, 5.00),
(9, NULL, 2, 'Pan de Regla', 194, 25.00),
(10, NULL, 3, 'Ensaymada', 200, 75.00),
(11, NULL, 4, 'Spanish Bread', 190, 8.00),
(12, NULL, 5, 'Tasty', 198, 70.00),
(13, NULL, 6, 'Kababayan', 185, 10.00),
(14, NULL, 7, 'Monay', 194, 10.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `checkout`
--
ALTER TABLE `checkout`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `fk_checkout_user` (`user_id`);

--
-- Indexes for table `loginregister`
--
ALTER TABLE `loginregister`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `order_id` (`order_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `checkout`
--
ALTER TABLE `checkout`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `loginregister`
--
ALTER TABLE `loginregister`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `checkout`
--
ALTER TABLE `checkout`
  ADD CONSTRAINT `fk_checkout_user` FOREIGN KEY (`user_id`) REFERENCES `loginregister` (`user_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `checkout` (`order_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
