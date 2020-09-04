INSERT INTO department (names)
VALUES ("Sales");

INSERT INTO department (names)
VALUES ("Engineering");

INSERT INTO department (names)
VALUES ("Finance");

INSERT INTO department (names)
VALUES ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 100000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Engineer", 70000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("Intern", 30000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Marketing Specialist", 50000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Margaret", "Massie", 4, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Harold", "Fischer", 3, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "Baker", 1, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Harrison", 2, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jared", "Tanner", 1, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Elizabeth", "Turner", 2, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Barry", "Barnes", 2, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Virginia", "Good", 3, NULL);