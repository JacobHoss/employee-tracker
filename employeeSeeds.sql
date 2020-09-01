INSERT INTO department (names)
VALUES ("Sales");

INSERT INTO department (names)
VALUES ("Engineering");

INSERT INTO department (names)
VALUES ("Finance");

INSERT INTO department (names)
VALUES ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 100000, 322);

INSERT INTO roles (title, salary, department_id)
VALUES ("Engineer", 70000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Intern", 30000, 32);

INSERT INTO roles (title, salary, department_id)
VALUES ("Marketing Specialist", 60000, 22);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Margaret", "Massie", 121, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Harold", "Fischer", 22, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "Baker", 111, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Harrison", 12, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jared", "Tanner", 189, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Elizabeth", "Turner", 999, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Barry", "Barnes", 1322, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Virginia", "Good", 1777, NULL);