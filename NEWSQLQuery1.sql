create database CarRental2;
go
use CarRental
go

create table UserDetails(
Id int Primary Key Identity(1,1),
FullName varchar(30) null,
EmailId varchar(30) unique not null,
ContactNo bigint null,
Gender varchar(7),
City varchar(50) null,
Password varchar(50) not null,
Roles varchar(7) default('User')
)
go
create table CarsDetails(
Id int Primary Key Identity(1,1),
Title varchar(50) null,
Brand varchar(50) null,
Description varchar(max) null,
PricePerDay int null,
FuelType varchar(50) null,
ModelYear int null,

)
go
create table BookingPage(
Id int Primary Key Identity(1,1),
UserId int references UserDetails(Id) on delete set null,
CarsId int references CarsDetails(Id) on delete set null,
FromDate date null,
ToDate date null,
Fees int null,
Status bit default(1)
)
go
create table ContactUs(
Id int Primary Key Identity(1,1),
Name varchar(30) null,
EmailId varchar(30) not null,
Message varchar(max),
)
go
create table Feedback(
Id int Primary Key Identity(1,1),
Name varchar(20),
Email varchar(20),
Comments varchar(max),

)

