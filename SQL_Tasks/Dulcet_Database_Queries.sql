create database dulcet_database;
use dulcet_database;

create table if not exists AccountCreator(
userId int primary key not null,
userName varchar(40) not null,
userEmail varchar(50) unique,
userMobileNumber varchar(20),
userPassword varchar(30),
registeredDate datetime);

insert into AccountCreator (userId, userName, userEmail, userMobileNumber, userPassword, registeredDate)
values
(3464, "Sandhiya", "sandhiya@gmail.com", "1234567890", "San@123diya", "2024-12-02 10:50");


create table Songs (
    songId int primary key,
    songName varchar(100),
    artistName varchar(100),
    albumName varchar(100),
    playlistName varchar(100),
    genre varchar(50),
    duration time
);


insert into Songs (songId, songName, artistName, albumName, playlistName, genre, duration) values
(1, 'Nenjukkul Peidhidum', 'Harris Jayaraj', 'Vaaranam Aayiram', 'Romantic Melodies', 'Melody', '00:04:25'),
(2, 'Rowdy Baby', 'Dhanush, Dhee', 'Maari 2', 'Dance Hits', 'Folk', '00:04:42'),
(3, 'Why This Kolaveri Di', 'Dhanush', '3', 'Trending Hits', 'Pop', '00:04:00'),
(4, 'Mersal Arasan', 'A.R. Rahman', 'Mersal', 'Mass Hits', 'Folk', '00:04:12'),
(5, 'Vaseegara', 'Bombay Jayashri', 'Minnale', 'Evergreen Classics', 'Melody', '00:05:02'),
(6, 'Anbe Sivam', 'S.P. Balasubrahmanyam', 'Anbe Sivam', 'Inspirational Songs', 'Devotional', '00:05:18'),
(7, 'Vaathi Coming', 'Anirudh Ravichander', 'Master', 'Party Hits', 'Folk', '00:03:50'),
(8, 'Aalaporan Thamizhan', 'A.R. Rahman', 'Mersal', 'Patriotic Songs', 'Folk', '00:05:47'),
(9, 'Munbe Vaa', 'A.R. Rahman', 'Sillunu Oru Kaadhal', 'Romantic Melodies', 'Melody', '00:05:20'),
(10, 'Kannaana Kanney', 'D. Imman', 'Viswasam', 'Heartfelt Tunes', 'Melody', '00:04:39');



insert into Songs (songId, songName, artistName, albumName, playlistName, genre, duration) values
(11, 'Oru Naalil', 'Yuvan Shankar Raja', 'Pudhupettai', 'Melancholy Tunes', 'Melody', '00:04:12'),
(12, 'Kadhalan Kangal', 'Sid Sriram', 'Unnale Unnale', 'Romantic Vibes', 'Melody', '00:05:00'),
(13, 'Thaniye Thananthaniye', 'Shankar Mahadevan', 'Rhythm', 'Soulful Tunes', 'Melody', '00:05:10'),
(14, 'En Uchimandai', 'Santhosh Narayanan', 'Jigarthanda', 'Mass Hits', 'Folk', '00:03:52'),
(15, 'Maduraikku Pogadhadi', 'Rahul Nambiar', 'Azhagiya Tamil Magan', 'Festive Beats', 'Folk', '00:04:30'),
(16, 'Kanave Kanave', 'Anirudh Ravichander', 'David', 'Emotional Tunes', 'Melody', '00:03:47'),
(17, 'Rakkamma Kaiya Thattu', 'SPB, Swarnalatha', 'Thalapathi', 'Retro Classics', 'Pop', '00:04:43'),
(18, 'Vizhigalil Oru Vaanavil', 'Karthik', 'Deiva Thirumagal', 'Heartfelt Tunes', 'Melody', '00:05:03'),
(19, 'Naaka Mukka', 'Chinmayi', 'Kadhalil Vizhunthen', 'Party Anthems', 'Pop', '00:03:32'),
(20, 'Vaseegara Remix', 'Bombay Jayashri', 'Minnale', 'Club Remixes', 'Pop', '00:04:50'),
(21, 'Poove Sempoove', 'K.J. Yesudas', 'Solla Thudikkudhu Manasu', 'Evergreen Hits', 'Classical', '00:06:22'),
(22, 'Manmadhan Theme', 'Yuvan Shankar Raja', 'Manmadhan', 'Instrumental Beats', 'Instrumental', '00:02:48'),
(23, 'Nenjinile Nenjinile', 'A.R. Rahman', 'Uyire', 'Romantic Melodies', 'Rock', '00:05:15'),
(24, 'Vaarthai Thavari', 'Haricharan', 'Ayudha Ezhuthu', 'Life Lessons', 'Classical', '00:04:25'),
(25, 'Petta Paraak', 'Anirudh Ravichander', 'Petta', 'Mass Moments', 'Rock', '00:04:35'),
(26, 'Kannamma Kannamma', 'Ilaiyaraaja', 'Kaala', 'Soulful Melodies', 'Folk', '00:04:52'),
(27, 'Maalai Neram', 'Chinmayi, Aalaap Raju', 'Anegan', 'Love Ballads', 'Melody', '00:05:08'),
(28, 'Aathichudi', 'Jassie Gift', 'TN 07 AL 4777', 'Cultural Beats', 'Folk', '00:03:55'),
(29, 'Narumugaiye', 'Unnikrishnan', 'Iruvar', 'Carnatic Specials', 'Classical', '00:06:00'),
(30, 'Kaatre En Vaasal', 'Hariharan', 'Rhythm', 'Calm and Peaceful', 'Melody', '00:05:38');

