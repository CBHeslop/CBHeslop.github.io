
// make form appear
$(document).ready(function() {
    $('#additional-files').click(function() {
        $('.show-onclick').show();
    });
});


// menu icon
function myFunction(x) {
    x.classList.toggle("change");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    
}


// Display the results to the screen
function display() {
    const newOrCurrent = employeeStatus();
    const first = employeeFirstName();
    const last = employeeLastName();
    const weeklyHours = hourlyCheck();
    const weeklySales = commissionCheck();
    let employee = employeeType(first, last, newOrCurrent, weeklyHours, weeklySales);

    let info = `${first} ${last} is a ${newOrCurrent} ${employee} employee`;
   

    document.getElementById('outputDiv').innerHTML = info;
    
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
    const radios = document.getElementsByName('radioType');

    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked == 0) {
            employeeStatus = "New";
        } else if (radios[i].checked == 1) {
            employeeStatus = "Current";
        }
    }

    return employeeStatus;
}


// Adds an input if user selects hourly from employee type
function hourlyCheck() {
    
    var elem = document.getElementById('salaryType');
    if (elem.selectedIndex == 1) {
        document.getElementById("hourlyDiv").style.display = 'block';
        var weeklyHours = document.getElementById('hourlyInput').value;
    } else {
        document.getElementById("hourlyDiv").style.display = 'none';
    }
    return weeklyHours;
}


// Adds an input if user selects commission from employee type
function commissionCheck() {
    
    var elem = document.getElementById('salaryType');
    if (elem.selectedIndex == 3) {
        document.getElementById("commissionDiv").style.display = 'block';
        var weeklySales = document.getElementById('commissionInput').value;
    } else {
        document.getElementById("commissionDiv").style.display = 'none';
    }
    return weeklySales;
}


// Returns the employee type from the user selects and display to screen
function employeeType(first, last, newOrCurrent, weeklyHours, weeklySales) {
    let salaryType = document.getElementById('salaryType').value;
    let hourly = document.getElementById('hourly').value;
    let salary = document.getElementById('salary').value;
    let commission = document.getElementById('commission').value;  

    if (salaryType == hourly) {
        if (newOrCurrent == "New") {
            var hourlyWage = (20.00).toFixed(2);
        } else {
            var hourlyWage = (25.00).toFixed(2);
        }
        
        if (weeklyHours > 40) {
            var overtimeHours = weeklyHours - 40;
            var overtimeWage = (hourlyWage * 1.5) * overtimeHours;
        } else {
            var overtimeHours = 0;
            var overtimeWage = 0;
        }

        employeeType = "Hourly"; 

        var hourlyWeeklyTotal = ((hourlyWage * (weeklyHours - overtimeHours)) + overtimeWage).toFixed(2);
        
        hourlyEmployee = new Array(weeklyHours, hourlyWage, employeeType);

        let info = `${first} ${last} is a ${newOrCurrent} ${hourlyEmployee[2]} employee`;
        let wage = `HourlyWage: $${hourlyEmployee[1]} <br> Hours Worked: ${hourlyEmployee[0]}`;
        let hourlyTotal = `Hourly Weekly Wage: $${hourlyWeeklyTotal}`;

        document.getElementById('outputDiv').innerHTML = info;
        document.getElementById('outputDiv2').innerHTML = wage;
        document.getElementById('outputDiv3').innerHTML = hourlyTotal;

    } else if (salaryType == salary) {
        if (newOrCurrent == "New") {
            var newOrCurrentSalary = (40000).toFixed(2);
        } else {
            var newOrCurrentSalary = (60000).toFixed(2);
        }

        employeeType = "Salary";

        var salaryEmployee = (newOrCurrentSalary / 52).toFixed(2);

        let info = `Yearly Salary: $${newOrCurrentSalary}`;
        let wage = `Salary Weekly Wage: $${salaryEmployee}`;

        document.getElementById('outputDiv2').innerHTML = info;
        document.getElementById('outputDiv3').innerHTML = wage;

    } else if (salaryType == commission) {
        if (newOrCurrent == "New") {
            var commissionPercent = (.20 * 100);
        } else {
            var commissionPercent = (.30 * 100);
        }

        var commissionWage = weeklySales * (commissionPercent / 100).toFixed(2);

        employeeType = "Commission";

        let info = `Commission Rate: ${commissionPercent}% <br> Weekly Sales: $${weeklySales}`;
        let wage = `Commission Weekly Wage: $${commissionWage}`;

        document.getElementById('outputDiv2').innerHTML = info;
        document.getElementById('outputDiv3').innerHTML = wage;

    } else {
        document.getElementById('outputDiv').innerHTML = "Please select Employee Type";
        employeeType();
    }

    return employeeType;
}


// Returns the employees first name
function employeeFirstName() {
    const first = document.getElementById('firstName').value;

    return first;
}


// Returns the employees last name
function employeeLastName() {
    const last = document.getElementById('lastName').value;

    return last;
}