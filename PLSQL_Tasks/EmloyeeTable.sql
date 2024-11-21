CREATE DATABASE learning_plsql;
USE learning_plsql;

CREATE TABLE Employee (
    emp_Id INT PRIMARY KEY, 
    emp_Name VARCHAR(50), 
    emp_Email VARCHAR(50),
    emp_DOB DATE,
    emp_DOJ DATE, 
    emp_Salary DECIMAL(10, 2),
    emp_Age INT,
    emp_BloodGroup VARCHAR(5),
    emp_Address VARCHAR(255),
    emp_Designation ENUM('Training', 'Developer', 'Testing', 'HR'),
    emp_Location ENUM('Chennai', 'Hyderabad', 'Kochi'),
    emp_Mobile_number VARCHAR(15)
);

INSERT INTO Employee(emp_Id, emp_Name, emp_Email, emp_DOB, emp_DOJ, emp_Salary, emp_Age, emp_BloodGroup, emp_Address, emp_Designation, emp_Location, emp_Mobile_number) 
VALUES
(1001, 'Basheer', 'basheer12@gmail.com', '1999-03-23', '2021-09-11', 20000.90, 22, 'B+', '1/10, Shivan Koil, Salem', 'HR', 'Kochi', 8236426623),
(1002, 'Akhil Sharma', 'akhil.sharma@gmail.com', '1985-07-15', '2019-05-20', 50000.00, 39, 'O-', '45/2, Sector 14, Gurgaon', 'Training', 'Kochi', 9876543210),
(1003, 'Suresh Kumar', 'suresh.kumar@yahoo.com', '1990-01-30', '2020-03-15', 30000.50, 34, 'A+', '12/3, MG Road, Bangalore', 'Developer', 'Hyderabad', 9123456789),
(1004, 'Priya Nair', 'priya.nair@gmail.com', '1995-04-20', '2021-01-25', 22000.30, 29, 'O+', '7/8, Film City Road, Mumbai', 'Testing', 'Chennai', 8899001122),
(1005, 'Rahul Reddy', 'rahul.reddy@techmail.com', '1992-11-11', '2020-06-01', 35000.50, 32, 'AB+', '15/4B New Ashok Nagar','Developer','Hyderabad', 9876123456),
(1006, 'Sneha Iyer', 'sneha.iyer@techmail.com','1988-08-21','2018-09-15', 45000.75, 36, 'B+','22/1C Anna Nagar','HR','Chennai', 9988776655),
(1007,'Vikram Singh','vikram.singh@consulting.com','1990-05-05','2021-02-10',40000.00, 34,'O+','18/5D Nungambakkam Chennai','Training','Chennai', 9876543210),
(1008,'Anjali Menon','anjali.menon@devmail.com','1994-03-12','2022-01-20', 30000.90, 30,'A+','4/2E T Nagar Chennai ','Testing', 'Chennai', 8236426623),
(1009,'Arjun Rao','arjun.rao@techmail.com','1987-09-15','2019-06-20', 55000.50, 36,'AB+','3/7B Banjara Hills Hyderabad ','Developer', 'Hyderabad', 9123456789),
(1010,'Nisha Patel','nisha.patel@hrmail.com','1991-02-28','2020-05-10', 32000.75, 33,'O+','5/6C Hitech City Hyderabad ','HR', 'Hyderabad', 9988776655),
(1011,'Karthik Varma','karthik.varma@testing.com','1986-04-19','2018-08-11', 48000.60, 37,'B+ ','10/3A Mylapore Chennai ','Testing','Chennai', 9999888776),
(1012,'Riya Kapoor','riya.kapoor@devmail.com', '1993-12-01', '2021-03-05', 36000.40, 30, 'AB-', '21/4D Indiranagar Bangalore ', 'Developer', 'Hyderabad', 9988776655),
(1013,'Deepak Joshi','deepak.joshi@hrmail.com', '1989-07-22', '2017-11-30', 43000.80, 35, 'O+', '17/5A Koramangala Bangalore ', 'Training', 'Kochi', 9876543210),
(1014,'Meera Menon','meera.menon@consulting.com', '1996-10-12', '2022-07-18', 25000.50, 27, 'A+', '8/9C Fort Kochi', 'HR', 'Kochi', 8236426623),
(1015,'Ravi Kumar','ravi.kumar@devmail.com', '1984-06-30', '2016-04-25', 60000.00, 40, 'B–', '14/2B Kottayam', 'Developer', 'Kochi', 9988776655);