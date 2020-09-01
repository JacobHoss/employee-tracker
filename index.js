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
        choices: ["View All Employees", "View All Departments", "View All Roles", "Add Employee", "Add Role", "Add Department", "Update Employee Roles", "Quit"]
    }
]

function addEmployee() {

}

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
                default:
                    console.log("Quitting...")
                    connection.end()
            }
        });
}

function viewAllEmployees() {
    connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        console.table(res);
        init();
    });
}

function viewAllDepartments() {
    connection.query("SELECT * FROM departments", function (err, res) {
        if (err) throw err;
        console.table(res);
        init();
    });
}

function viewAllRoles() {
    connection.query("SELECT title FROM roles", function (err, res) {
        if (err) throw err;
        console.log(res[0].title);
        init();
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
        .prompt({
            name: "choice",
            type: "list",
            message: "Which Role would you like to update?",
            choices: rolesArray
        }) // adding .then function later;
    });
    init();
}