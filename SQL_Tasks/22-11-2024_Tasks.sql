use learning_plsql;
set sql_safe_updates = 0;
-- set foreign_key_checks = 0;
create table if not exists Employee_New;
update employee_new set managerName = 'Victoria' where employeeId = 110;

create table if not exists Employee_New (
employeeId int,
employeeName varchar(30),
employeeSalary int,
employeeLocation varchar(30),
employeeDOJ date,
managerName varchar(30),
departmentId int,
primary key (employeeId)
);

create table if not exists Department (
departmentId int primary key,
departmentName varchar(30),
employeeCount int,
foreign key (departmentId) references Employee_New(departmentId)
);

create table if not exists Projects(
projectId int primary key,
projectName varchar(20),
departmentId int,
foreign key (departmentId) references Employee_New(departmentId));

alter table Projects modify projectId varchar(20);
alter table Projects modify projectName varchar(50);

INSERT INTO Projects (projectId, projectName, departmentId)
VALUES
('a1b2c3', 'Java Development', 10584),
('d4e5f6', 'Python Development', 13489),
('g7h8i9', 'JavaScript Development', 13489),
('j1k2l3', 'C# Development', 22356),
('m4n5o6', 'Java Development', 31782),
('p7q8r9', 'Python Development', 31782),
('s1t2u3', 'Ruby Development', 56123),
('v4w5x6', 'PHP Development', 56124),
('y7z8a1', 'Go Development', 67890),
('b2c3d4', 'Swift Development', 67891);


INSERT INTO Department (departmentId, departmentName, employeeCount) VALUES
(56123, 'TN', 0),
(56124, 'TN', 0),
(67890, 'TA', 0),
(67891, 'TA', 0),
(67892, 'TA', 0),
(67893, 'TA', 0),
(10584, 'Logistics', 0),
(13489, 'HR', 0),
(22356, 'Finance', 0),
(31782, 'Engineering', 0);


truncate table department;
alter table Department drop foreign key departmentId;


-- 1. Write a query to display all rows and columns from the employees table.
select * from Employee_New;

-- 2. Retrieve only the name and salary of all employees from the employees table.
select employeeName, employeeSalary from Employee_new;

-- 3. Write a query to find all employees whose salary is greater than 50,000.
select * from Employee_New where employeeSalary > 50000;

-- 4. List all employees who joined the company in the year 2020.
select * from employee_new where year(employeeDOJ) = 2020;

-- 5. Retrieve the details of employees whose names start with the letter 'A'.
select * from Employee_New where employeeName like 'a%';

-- 1. Write a query to calculate the average salary of all employees.
select avg(employee_new.employeeSalary) as Employee_Average_Salary from Employee_New;

-- 2. Find the total number of employees in the company.
select count(employeeId) as Employee_Count from Employee_New;

-- 3. Write a query to find the highest salary in the employees table.
select max(employee_new.employeeSalary) as Highest_Salary from employee_new;

-- 4. Calculate the total salary paid by the company for all employees.
select (avg(employeeSalary) * count(employeeId)) as Salary_Paid_By_Company from Employee_New;
select sum(employeeSalary) as Salary_Paid_By_Company from Employee_New;

-- 5. Find the count of employees in each department.
select d.departmentName as departmentName, count(e.employeeId) as employeeCount 
from Employee_New e
join Department d on e.departmentId = d.departmentId
group by d.departmentName;

-- 1. Write a query to retrieve employee names along with their department names (using employees and departments tables).
select e.employeeName, d.departmentName 
from Employee_New e
join Department d on e.departmentId = d.departmentId;

-- 2. List all employees who have a manager (self-join on employees table).
select * from Employee_New e, Department d where e.departmentId = d.departmentId group by e.employeeId;

-- 3. Find the names of employees who are working on multiple projects (using employees and projects tables).
select e.employeeName, count(p.projectId) as projectCount
from Employee_New e
join Projects p on e.departmentId = p.departmentId
group by e.departmentId, e.employeeName
having count(p.projectId) > 1;

-- 4. Write a query to display all projects and the employees assigned to them.
select p.projectName, e.employeeName
from Employee_New e
join Projects p on e.departmentId = p.departmentId;

-- 5. Retrieve the names of employees who do not belong to any department.
-- alter table Employee_New modify departmentId int not null; 
-- update Employee_New set departmentId = null where employeeId = 102;
select employeeName from Employee_New where departmentId is null;

-- 1. Write a query to find the employees with the second-highest salary.
select employeeName, employeeSalary 
from Employee_New where employeeSalary = 
(select max(Employee_New.employeeSalary) from Employee_New where employeeSalary 
<
(select max(Employee_New.employeeSalary) from Employee_New));

-- 2. Retrieve the names of employees whose salary is above the department average salary.
SELECT e.employeeName, e.employeeSalary, d.departmentName
FROM Employee_New e
JOIN Department d ON e.departmentId = d.departmentId
WHERE e.employeeSalary > (
    SELECT AVG(e2.employeeSalary)
    FROM Employee_New e2
    WHERE e2.departmentId = e.departmentId
);

-- 3. Find employees who earn more than the average salary of the entire company.
select * from Employee_New where employeeSalary > (select avg(employeeSalary) from Employee_New);

-- 4. Write a query to find the department with the highest number of employees.
select count(departmentId) as highest_count from Department order by departmentName limit 1;
SELECT departmentName, employeeCount
FROM Department
ORDER BY employeeCount DESC
LIMIT 1;

-- 5. List all employees who work in a department located in 'New York'.
select e.employeeName, d.departmentName 
from Employee_New e 
join Department d on e.departmentId = d.departmentId 
where employeeLocation = 'New York';

-- 1. Write a query to find employees who work in either the 'HR' or 'Finance' department.
select e.employeeName from Employee_New e 
join Department d 
on e.departmentId = d.departmentId
where d.departmentName in ('HR', 'Finance');

-- 2. Retrieve the names of employees who are working on both Project A and Project B.
select e.employeeName from Employee_New e
join Projects p1 on e.departmentId = p1.departmentId and p1.projectName = 'Java Development'
join Projects p2 on e.departmentId = p2.departmentId and p2.projectName = 'Python Development';

-- 3. Find employees who are not assigned to any project.
select e.employeeName from Employee_New e
where e.employeeId not in (select e.employeeId from Projects);

-- 4. Write a query to get all unique job titles across all departments.
select distinct projectName from Projects;

-- 5. Combine two tables (employees and former_employees) and remove duplicates.
select * from Employee_New
union 
select * from Employee;

select * from Department;

-- 1. Write a query to add a new employee to the employees table.
insert into Employee_New values (111, 'Linda', 87000, 'New Jersey', '2023-01-15', 10584, 'John');

-- 2. Update the salary of all employees in the 'HR' department by 10%.
update Employee_New set employeeSalary = employeeSalary * 1.10
where departmentId = (select departmentId from Department where departmentName = 'HR');

select e.employeeName, d.departmentName, e.employeeSalary from Employee_New e
join Department d on e.departmentId = d.departmentId
where d.departmentName = 'HR';

-- 3. Delete all employees who have not worked for more than 5 years.
select * from Employee_New;
update Employee_New set employeeDOJ = '2016-01-30' where employeeId = 104;
delete from Employee_New where datediff(curdate(), employeeDOJ) > 5 * 365;
select employeeId, employeeName from Employee_New;
-- after that 104 deleted so I added again 104
insert into Employee_New values (104,'Kingsley', 70000, 'Chicago', '2022-08-10', 31782, 'David');

-- 4. Create a new table departments_backup with the same structure as the departments table.
create table Departments_Backup as
select * from Department where 1=0;
insert into Departments_Backup select * from Department;

-- 5. Drop the temporary_data table from the database.
drop table if exists Departments_Backup;

-- 1. Add a primary key to the employees table.
-- I have already added the employeeId as primary key in the table creation itself.

-- 2. Write a query to create a foreign key between employees and departments tables.
-- Already created the foreign key too in the table creation itself.

-- 3. Add a unique constraint to the email column in the employees table.

-- 4. Write a query to check all constraints applied on the employees table.

-- 5. Remove the NOT NULL constraint from the phone_number column in the employees table.