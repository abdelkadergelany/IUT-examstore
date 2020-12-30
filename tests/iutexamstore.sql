-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2020 at 09:19 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iutexamstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pdf` bigint(20) UNSIGNED NOT NULL,
  `user` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `pdf`, `user`, `created_at`, `updated_at`) VALUES
(1, 17, 2, '2020-08-06 07:30:35', '2020-08-06 07:30:35'),
(2, 19, 2, '2020-08-06 07:31:14', '2020-08-06 07:31:14'),
(3, 25, 2, '2020-12-30 11:18:13', '2020-12-30 11:18:13');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2020_06_26_171656_create_pdf_models_table', 1),
(5, '2020_07_09_094726_create_submited__papers_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pdf_models`
--

CREATE TABLE `pdf_models` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `dept` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cse',
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Final',
  `year` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '2020',
  `semester` int(11) NOT NULL DEFAULT '6',
  `course_Code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'CSE 4649',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'CSE 4649 Midterm2017',
  `pdf` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'CSE 4649_Midterm2017pdf',
  `submitted_By` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'ALY@GMAIL.COM',
  `cover_pict` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cover.png',
  `keywords` longtext COLLATE utf8mb4_unicode_ci,
  `validated` int(11) NOT NULL DEFAULT '1',
  `program` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'BSC',
  `semester_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'WINTER',
  `course_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pdf_models`
--

INSERT INTO `pdf_models` (`id`, `dept`, `type`, `year`, `semester`, `course_Code`, `title`, `pdf`, `submitted_By`, `cover_pict`, `keywords`, `validated`, `program`, `semester_name`, `course_name`, `created_at`, `updated_at`) VALUES
(17, 'cse', 'midterm', '2019', 6, 'CSE_4615', 'CSE_4615_midterm2019', 'pdf/cse/semester6/CSE_4615_midterm_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'collision in back2f', 1, 'bsc', 'WINTER', 'Wireless Networks', '2020-07-10 12:56:44', '2020-07-10 12:56:44'),
(18, 'cse', 'final', '2019', 6, 'cse_4617', 'cse_4617_final_2019', 'pdf/cse/semester6/cse_4617_final_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'programming with and without ai', 1, 'bsc', 'WINTER', 'Artificial Intelligence', '2020-07-10 13:55:22', '2020-07-10 13:55:22'),
(19, 'cse', 'midterm', '2019', 6, 'cse_4519', 'cse_4519_midterm_2019', 'pdf/cse/semester6/cse_4519_midterm_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'Atmega16', 1, 'bsc', 'WINTER', 'Peripherals and Interfacing', '2020-07-10 13:59:12', '2020-07-10 13:59:12'),
(20, 'cse', 'final', '2019', 6, 'cse_4631', 'cse_4631_final_2019', 'pdf/cse/semester6/cse_4631_final_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'Spectral Analysis', 1, 'bsc', 'WINTER', 'Digital Signal Processing', '2020-07-10 14:02:00', '2020-07-10 14:02:00'),
(21, 'cse', 'final', '2019', 7, 'cse_4703', 'cse_4703_final_2019', 'pdf/cse/semester7/cse_4703_final_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'non deterministic', 1, 'bsc', 'WINTER', 'Theory of Computing', '2020-07-10 14:08:31', '2020-07-10 14:08:31'),
(22, 'cse', 'midterm', '2019', 7, 'cse_4703', 'cse_4703_midterm_2019', 'pdf/cse/semester7/cse_4703_midterm_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'janen', 1, 'bsc', 'WINTER', 'Theory of Computation', '2020-07-10 14:10:46', '2020-07-10 14:10:46'),
(23, 'cse', 'final', '2019', 7, 'cse_4709', 'cse_4709_final_2019', 'pdf/cse/semester7/cse_4709_final_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'overfiting and under-fitting', 1, 'bsc', 'WINTER', 'Marchine Learning', '2020-07-10 14:13:43', '2020-07-10 14:13:43'),
(24, 'cse', 'midterm', '2019', 7, 'cse_4709', 'cse_4709_midterm_2019', 'pdf/cse/semester7/cse_4709_midterm_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'Mitchel', 1, 'bsc', 'WINTER', 'Marchine Learning', '2020-07-10 14:18:05', '2020-07-10 14:18:05'),
(25, 'cse', 'final', '2019', 7, 'cse_4733', 'cse_4733_final_2019', 'pdf/cse/semester7/cse_4733_final_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'hole filing', 1, 'bsc', 'WINTER', 'Digital Image processing', '2020-07-10 14:23:11', '2020-07-10 14:23:11'),
(26, 'cse', 'midterm', '2019', 7, 'cse_4733', 'cse_4733_midterm_2019', 'pdf/cse/semester7/cse_4733_midterm_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'chromatic light', 1, 'bsc', 'WINTER', 'Digital Image Processing', '2020-07-10 14:28:58', '2020-07-10 14:28:58'),
(27, 'cse', 'final', '2019', 7, 'cse_4739', 'cse_4739_final_2019', 'pdf/cse/semester7/cse_4739_final_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'Minign in software', 1, 'bsc', 'WINTER', 'Data Mining', '2020-07-10 14:32:36', '2020-07-10 14:32:36'),
(28, 'cse', 'midterm', '2019', 7, 'cse_4739', 'cse_4739_midterm_2019', 'pdf/cse/semester7/cse_4739_midterm_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'data quality', 1, 'bsc', 'WINTER', 'Data Mining', '2020-07-10 14:36:39', '2020-07-10 14:36:39'),
(29, 'cse', 'final', '2019', 7, 'hum_4741', 'hum_4741_final_2019', 'pdf/cse/semester7/hum_4741_final_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'job circular', 1, 'bsc', 'WINTER', 'Business Comunication and Law', '2020-07-10 14:38:28', '2020-07-10 14:38:28'),
(30, 'cse', 'final', '2019', 7, 'math_4741', 'math_4741_final_2019', 'pdf/cse/semester7/math_4741_final_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'gambler', 1, 'bsc', 'WINTER', 'Mathematical Analysis', '2020-07-10 14:41:26', '2020-07-10 14:41:26'),
(31, 'cse', 'midterm', '2019', 7, 'hum_4741', 'hum_4741_midterm_2019', 'pdf/cse/semester7/hum_4741_midterm_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'kickoff', 1, 'bsc', 'WINTER', 'Business Communication and Law', '2020-07-10 14:43:10', '2020-07-10 14:43:10'),
(32, 'cse', 'midterm', '2019', 7, 'math_4741', 'math_4741_midterm_2019', 'pdf/cse/semester7/math_4741_midterm_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'Transient state', 1, 'bsc', 'WINTER', 'Mathematical Analysis', '2020-07-10 14:44:28', '2020-07-10 14:44:28'),
(33, 'cse', 'midterm', '2019', 7, 'cse_4743', 'cse_4743_midterm_2019', 'pdf/cse/semester7/cse_4743_midterm_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'digital signature', 1, 'bsc', 'WINTER', 'Cryptography and network Security', '2020-07-10 14:55:59', '2020-07-10 14:55:59'),
(34, 'cse', 'final', '2019', 6, 'hum_4641', 'hum_4641_final_2019', 'pdf/cse/semester6/hum_4641_final_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'cost sheet', 1, 'bsc', 'WINTER', 'Accounting', '2020-07-10 15:00:15', '2020-07-10 15:00:15'),
(35, 'cse', 'final', '2019', 6, 'math_4641', 'math_4641_final_2019', 'pdf/cse/semester6/math_4641_final_2019.pdf', 'ALY@GMAIL.COM', 'cover.png', 'error in mathematical calculations', 1, 'bsc', 'WINTER', 'Numerical Analysis', '2020-07-10 15:12:01', '2020-07-10 15:12:01');

-- --------------------------------------------------------

--
-- Table structure for table `submited__papers`
--

CREATE TABLE `submited__papers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `department` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `semester` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `folder` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isValidated` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `submited__papers`
--

INSERT INTO `submited__papers` (`id`, `department`, `type`, `year`, `semester`, `folder`, `isValidated`, `created_at`, `updated_at`) VALUES
(1, 'btm', 'final', '-2', 'sem1', 'q3U95l', 0, '2020-07-09 04:48:48', '2020-07-09 04:48:48'),
(2, 'cse', 'final', '11', 'sem1', 'jtIBq1', 0, '2020-07-09 05:41:07', '2020-07-09 05:41:07'),
(3, 'cse', 'final', '11', 'sem1', '3rhgCr', 0, '2020-07-09 05:43:58', '2020-07-09 05:43:58'),
(4, 'eee', 'final', '22', 'sem1', 'wWjpEn', 0, '2020-07-09 06:41:20', '2020-07-09 06:41:20'),
(5, 'eee', 'final', '55', 'sem2', 'P3hxbt', 0, '2020-07-09 06:42:20', '2020-07-09 06:42:20'),
(6, 'eee', 'midterm', '11', 'sem2', 'LVE765', 0, '2020-07-09 08:38:08', '2020-07-09 08:38:08'),
(7, 'eee', 'final', '11', 'sem3', 'zwT49i', 0, '2020-07-09 08:46:46', '2020-07-09 08:46:46'),
(8, 'btm', 'final', '2020', 'sem2', '7fLQ5F', 0, '2020-07-09 10:06:10', '2020-07-09 10:06:10'),
(9, 'eee', 'final', '4', 'sem1', '2PGzQr', 0, '2020-07-09 10:37:38', '2020-07-09 10:37:38'),
(10, 'eee', 'final', '3', 'sem1', 'aXIo7Z', 0, '2020-07-09 10:49:36', '2020-07-09 10:49:36'),
(11, 'eee', 'midterm', '11', 'sem4', 'G2bkOv', 0, '2020-07-09 10:51:58', '2020-07-09 10:51:58'),
(12, 'eee', 'final', '2020', 'sem2', 'QYEBqY', 0, '2020-07-09 10:55:01', '2020-07-09 10:55:01'),
(13, 'mce', 'final', '2020', 'sem2', '1MdJ3H', 0, '2020-07-09 11:04:51', '2020-07-09 11:04:51'),
(14, 'mce', 'midterm', '2020', 'sem3', '8fIxKm', 0, '2020-07-09 11:07:46', '2020-07-09 11:07:46'),
(15, 'cse', 'midterm', '1', 'sem2', 'i0zjI0', 0, '2020-07-09 11:10:38', '2020-07-09 11:10:38'),
(16, 'eee', 'quiz', '2020', 'sem3', 'w3FB2U', 0, '2020-07-09 11:11:48', '2020-07-09 11:11:48');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Aly', 'gelany@gmail.com', NULL, '$2y$10$ooDiB4uq/gzMqBnT6obCguNaUyCs4SlozgcKRCtJSyvESEKzv1eTK', NULL, '2020-07-02 00:44:17', '2020-07-02 00:44:17'),
(2, 'salamatou', 'salamatou@gmail.com', NULL, '$2y$10$uUkzYXjyU6he.Cv4j7hn0uZppk7wCzuihc2QqirDPRqeed4uX1agK', NULL, '2020-07-03 16:12:12', '2020-07-03 16:12:12'),
(3, 'salamatou', 'salamatou12@gmail.com', NULL, '$2y$10$.XJKbRqIi1tIeVbGw0j6Z.mi6oBWw1tKanEGYwOlCwRN6Bb2Iapxu', NULL, '2020-07-03 19:07:36', '2020-07-03 19:07:36'),
(4, 'amira', 'amira@gmail.com', NULL, '$2y$10$DiA5faEJ3v8b6Dbcw26eFuutRG0KE8arQnWkyDqVt0XvzixCTPygq', NULL, '2020-07-03 19:14:08', '2020-07-03 19:14:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `constrain_pdf` (`pdf`),
  ADD KEY `constraint_favorite_users` (`user`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `pdf_models`
--
ALTER TABLE `pdf_models`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `submited__papers`
--
ALTER TABLE `submited__papers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pdf_models`
--
ALTER TABLE `pdf_models`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `submited__papers`
--
ALTER TABLE `submited__papers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `constrain_pdf` FOREIGN KEY (`pdf`) REFERENCES `pdf_models` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `constraint_favorite_users` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
