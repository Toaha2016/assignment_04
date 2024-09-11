function checkDigitsInName(name) {
    // Check if the input is a string
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    // Regular expression to check if the string contains any digits
    const hasDigits = /\d/.test(name);

    // Return true if digits are found, otherwise false
    return hasDigits;
}

// Example usage:
console.log(checkDigitsInName("Raju123"));   // Output: true
console.log(checkDigitsInName("Raju"));      // Output: false
console.log(checkDigitsInName(12345));       // Output: Invalid Input
