
// Display the results to the screen
function display() {
    const newOrCurrent = employeeStatus();
    const first = employeeFirstName();
    const last = employeeLastName();
    let employee = employeeType();

    let wage = `${first} ${last} is a ${newOrCurrent} ${employee} employee`;

    document.getElementById('outputDiv').innerHTML = wage;
}


// Writing to a file with node.js
/*
const fs = require('fs');

let data = "Learning how to write data to file";


fs.writeFile('Output.txt', data, (err) => {
        if (err) throw err;
    })
*/


// Returns whether the employee is new or current
function employeeStatus() {
    const radios = document.getElementsByName('type');

    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked == 0) {
            employeeStatus = "New";
        } else if (radios[i].checked == 1) {
            employeeStatus = "Current";
        }
    }

    return employeeStatus;
}


// Returns the employee type from the user selects
function employeeType() {
    let salaryType = document.getElementById("salaryType").value;
    let hourly = document.getElementById("hourly").value;
    let salary = document.getElementById("salary").value;
    let commission = document.getElementById("commission").value;  

    if (salaryType == hourly) {
        employeeType = "Hourly";
    } else if (salaryType == salary) {
        employeeType = "Salary";
    } else if (salaryType == commission) {
        employeeType = "Commission";
    } else {
        document.getElementById('outputDiv').innerHTML = "Please select Employee Type";
        employeeType();
    }

    return employeeType;
}


// Returns the employees first name
function employeeFirstName() {
    const first = document.getElementById("firstName").value;

    return first;
}


// Returns the employees last name
function employeeLastName() {
    const last = document.getElementById("lastName").value;

    return last;
}