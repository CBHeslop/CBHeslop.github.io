function monthlyBudget() {
    var income = parseFloat(document.getElementById('monthlyIncome').value) || 0;
    var house = parseFloat(document.getElementById('housePayment').value) || 0;
    var utilities = parseFloat(document.getElementById('utilitiesPayment').value) || 0;
    var auto = parseFloat(document.getElementById('autoInsurance').value) || 0;
    var phone = parseFloat(document.getElementById('phonePayment').value) || 0;
    var creditCard = parseFloat(document.getElementById('creditCardPayment').value) || 0;
    var food = parseFloat(document.getElementById('foodExpenses').value) || 0;
    var medical = parseFloat(document.getElementById('medicalExpenses').value) || 0;
    var random = parseFloat(document.getElementById('randomExpenses').value) || 0;



    var amount = "Your monthly income is " + "$" + income.toFixed(2);

    var total = monthlyExpenses(house, utilities, auto, phone, creditCard, food, medical, random);

    var totalBills = "Your total expenses are: " + "$" + total.toFixed(2);

    document.getElementById('outputDiv').innerHTML = amount;

    document.getElementById('outputDiv1').innerHTML = totalBills;

    var leftOver = budgetLeftOver(income, total);

    var balance = "Your remaining balance is: " + "$" + leftOver.toFixed(2);

    document.getElementById('outputDiv2').innerHTML = balance;
}

function monthlyExpenses(house, utilities, auto, phone, creditCard, food, medical, random) {
    var total = house + utilities + auto + phone + creditCard + food + medical + random;

    return total;
}

function budgetLeftOver(income, total) {
    var leftOver = income - total;

    return leftOver;
}