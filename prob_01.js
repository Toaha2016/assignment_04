function calculateTax(monthlyIncome, monthlyExpenses) {
    // Calculate the difference between income and expenses
    const profit = monthlyIncome - monthlyExpenses;

    // Calculate 20% of the profit as tax
    const tax = profit * 0.20;

    // Return the calculated tax
    return tax;
}

// Example usage:
const income = 100000;  // Harun's monthly income
const expenses = 70000; // Harun's monthly expenses
const tax = calculateTax(income, expenses);
console.log("The calculated tax is:", tax);
