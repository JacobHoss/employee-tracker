const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "employees_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    init();
});

const mainQuestion = [
    {
        name: "answer",
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees", "View All Departments", "View All Roles", "Add Employee", "Add Role", "Add Department", "Update Employee Roles", "Delete Departments", "Delete Roles", "Delete Employees", "Quit"]
    }
]

function init() {
    inquirer
        .prompt(mainQuestion
        ).then(function (data) {
            switch (data.answer) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "View All Departments":
                    viewAllDepartments();
                    break;
                case "View All Roles":
                    viewAllRoles();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Update Employee Roles":
                    updateEmployeeRoles();
                    break;
                case "Delete Departments":
                    deleteDepartments();
                    break;
                case "Delete Roles":
                    deleteRoles();
                    break;
                case "Delete Employees":
                    deleteEmployees();
                    break;
                default:
                    console.log("Quitting...")
                    connection.end()
            }
        });
}



function viewAllDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        console.log("You are now viewing all the departments")
        init();
    });
}

function addDepartment() {
    inquirer
        .prompt(
            {
                name: "name",
                type: "input",
                message: "What is the name of your new Department?"
            }).then(function (data) {
                let post = `INSERT INTO department (names) VALUES ('${data.name}')`
                connection.query(post, function (err) {
                    if (err) throw err;
                    console.log("Adding new Department... \n")
                    init();
                });
            });
}

function deleteDepartments() {
    connection.query("SELECT id, names FROM department", function (err, res) {
        if (err) throw err;
        let deleteDepartmentArray = [];
        for (let i = 0; i < res.length; i++) {
            let idAndTitle = `${res[i].id} ${res[i].names}`
            deleteDepartmentArray.push(idAndTitle);
        }
        inquirer
            .prompt(
                {
                    name: "choice",
                    type: "list",
                    message: "Which Department would you like to Delete?",
                    choices: deleteDepartmentArray
                }
            ).then(function (data) {
                let split = data.choice.split(" ");
                let idInt = parseInt(split[0]);
                connection.query(`DELETE FROM department WHERE id = ${idInt}`, err => {
                    if (err) throw err;
                    console.log("Deleting selected department... \n")
                    init();
                });
            });
    });
}

function viewAllRoles() {
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;
        console.table(res);
        console.log("You are now viewing all the Roles")
        init();
    });
}

function addEmployee() {
    inquirer
        .prompt([{
            name: "firstname",
            type: "input",
            message: "What is their First Name?"
        },
        {
            name: "lastname",
            type: "input",
            message: "What is their Last Name?"
        },
        {
            name: "roleid",
            type: "input",
            message: "What is their Role ID?"
        },
        {
            name: "managerid",
            type: "input",
            message: "What is their Manager ID if applicable. If not, type in null?"
        }
        ]).then(function (data) {
            let post = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${data.firstname}', '${data.lastname}', ${data.roleid}, ${data.managerid})`
            connection.query(post, function (err) {
                if (err) throw err;
                console.log("Adding new Employee... \n")
                init();
            });
        });
}

function deleteEmployees() {
    connection.query("SELECT id, first_name, last_name FROM employees", function (err, res) {
        if (err) throw err;
        let employeesArray = [];
        for (let i = 0; i < res.length; i++) {
            let fullName = `${res[i].id} ${res[i].first_name} ${res[i].last_name}`
            employeesArray.push(fullName);
        }
        inquirer
            .prompt(
                {
                    name: "choice",
                    type: "list",
                    message: "Which Employee would you like to Delete?",
                    choices: employeesArray
                }
            ).then(function (data) {
                let split = data.choice.split(" ");
                let idInt = parseInt(split[0]);
                connection.query(`DELETE FROM employees WHERE id = ${idInt}`, err => {
                    if (err) throw err;
                    console.log("Deleting selected .. \n")
                    init();
                })
            });
    });
}

function viewAllEmployees() {
    connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        console.table(res);
        console.log("You are now viewing all the employees")
        init();
    });
}

function addRole() {
    inquirer
        .prompt([{
            name: "title",
            type: "input",
            message: "What is the title of the Role?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary of the Role?"
        },
        {
            name: "department_id",
            type: "input",
            message: "What is the department_id of the Role?"
        }
        ]).then(function (data) {
            let post = `INSERT INTO roles (title, salary, department_id) VALUES ('${data.title}', '${data.salary}', ${data.department_id})`
            connection.query(post, function (err) {
                if (err) throw err;
                console.log("Adding new role... \n")
                init();
            });
        });
}

function deleteRoles() {
    connection.query("SELECT id, title FROM roles", function (err, res) {
        if (err) throw err;
        let deleteRolesArray = [];
        for (let i = 0; i < res.length; i++) {
            let idAndTitle = `${res[i].id} ${res[i].title}`
            deleteRolesArray.push(idAndTitle);
        }
        inquirer
            .prompt(
                {
                    name: "choice",
                    type: "list",
                    message: "Which Role would you like to Delete?",
                    choices: deleteRolesArray
                }
            ).then(function (data) {
                let split = data.choice.split(" ");
                let idInt = parseInt(split[0]);
                connection.query(`DELETE FROM roles WHERE id = ${idInt}`, err => {
                    if (err) throw err;
                    console.log("Deleting selected role... \n")
                    init();
                });
            });
    });
}

function updateEmployeeRoles() {
    connection.query("SELECT title FROM roles", function (err, res) {
        if (err) throw err;
        let rolesArray = [];
        for (let i = 0; i < res.length; i++) {
            rolesArray.push(res[i].title)
        }
        inquirer
            .prompt([{
                name: "choice",
                type: "list",
                message: "Which Role would you like to update?",
                choices: rolesArray
            },
            {
                name: "update",
                type: "list",
                message: "What would you like to update in the selected Role?",
                choices: ["salary", "department_id"]
            },
            {
                name: "input",
                type: "input",
                message: "Input a number"
            }
            ]).then(function (data) {
                let updateValues = {};
                updateValues[data.update] = data.input;
                connection.query('UPDATE roles SET ? WHERE ?', [updateValues, { title: data.choice }], err => {
                    if (err) throw err;
                    console.log("Updating selected employee role... \n")
                    init();
                })
            });
    });

}