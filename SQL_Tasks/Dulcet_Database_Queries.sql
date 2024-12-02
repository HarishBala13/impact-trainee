create database dulcet_database;
use dulcet_database;

create table if not exists AccountCreator(
userId int primary key not null,
userName varchar(40) not null,
userEmail varchar(50) unique,
userMobileNumber varchar(20),
userPassword varchar(30),
registeredDate datetime);
