-- 1) Return a table of Employee with a Stored procedure with use of functions
delimiter &&
create procedure get_employee_details()
begin
    declare total_salary decimal(10,2);
    set total_salary = get_total_salary();
    select concat('Total Salary of Employees: ', total_salary) as TotalSalary;
    select * from employee;
end&&
delimiter ;


delimiter &&
create function get_total_salary()
returns decimal(10,2)
deterministic
begin
    declare total_salary decimal(10,2);
    select sum(Employee.emp_Salary) into total_salary from Employee;
    return total_salary;
end&&
delimiter ;

call get_employee_details();