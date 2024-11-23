-- 3) Create a view that should return the one who are the most senior most employee 

create view seniorEmployeeView
as
select emp_Name, emp_Age, emp_Salary, emp_Designation from Employee where ( YEAR(current_date()) - YEAR(emp_DOB) > 30 ) order by emp_Age desc;

select * from seniorEmployeeView;