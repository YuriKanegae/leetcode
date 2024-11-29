with qualified_managers as (
    select managerId, count(id) as quantity
        from Employee
        group by managerId
        having quantity >= 5
) select name
    from Employee inner join qualified_managers
        on Employee.id = qualified_managers.managerId;