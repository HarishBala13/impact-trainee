create view employee_credentials
as
select 
Employee.emp_Id, 
Employee.emp_Name, 
Employee.emp_Designation, 
Employee.emp_Location, 
employee_credentials_table.emp_Reporting_Manager 
from Employee 
inner join employee_credentials_table on Employee.emp_Id = employee_credentials_table.emp_Id order by emp_Id;

select * from employee_credentials;

select * from employee_credentials where emp_Location = 'Chennai' and emp_Designation = 'Training';