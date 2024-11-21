-- Starting triggers when there is DML Command in the Employee Table
delimiter &&
create trigger insert_trigger
after insert on Employee
for each row
begin
    DECLARE employee_count INT;
    SELECT COUNT(emp_Id) INTO employee_count FROM Employee;
    INSERT INTO employee_log (log_time, message, emp_Id, emp_Name, employee_count)
    VALUES (CURRENT_DATE(), 'Inserted', NEW.emp_Id, NEW.emp_Name, employee_count);
end &&
delimiter ;

INSERT INTO Employee
(emp_Id, emp_Name, emp_Email, emp_DOB, emp_DOJ, emp_Salary, emp_Age, emp_BloodGroup, emp_Address, emp_Designation, emp_Location, emp_Mobile_number) 
VALUES
(1020,'Ajmal', 'ajmalameer@gmail.com', '1999-03-23', '2021-09-11', 38764.90, 22, 'B+', '13/210,Holy Goat Street, Canria', 'Training', 'Kochi', 8374654762);

select * from employee_log;

drop trigger learning_plsql.insert_trigger;
 
delimiter //
create trigger trg_after_update_salary
on Employee
after update
as
begin
insert into learning_plsql.employee_log
select getdate(),'INSERTED RECORD',emp_Id,emp_Name
from inserted
end;
delimiter ;

update Employee set emp_Salary=30000.32 where emp_Id=1004;

select * from learning_plsql.employee_log;

DELIMITER $$ 
create trigger before_insert
before insert on employee_log
for each row
begin
update Employee set emp_Salary=new.emp_Salary where emp_Id = new.emp_Id;
end;
DELIMITER ;

INSERT INTO Employee value(1018,'Edren', 'viledrian@gmail.com', '1999-03-23', '2021-09-11', 86500.90, 22, 'B-', '1/10,Holy Angels Street, Canria', 'Developer', 'Kochi', 8236426623);



