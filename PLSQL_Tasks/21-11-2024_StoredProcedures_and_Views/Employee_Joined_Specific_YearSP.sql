-- 2) Write a Stored Procedure that returns details of Employees joined in a specific year
delimiter &&
create procedure get_employee_joined_specific_year(in specific_year INT)
begin
    select emp_Id, emp_Name, emp_Designation, emp_Mobile_number, emp_Salary from Employee where YEAR(emp_DOJ) = specific_year;
end &&
delimiter ;

call get_employee_joined_specific_year(2021);