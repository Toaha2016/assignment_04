function calculateFinalScore(testScore, schoolGrade, parentProfession) {
    // Validate input ranges for testScore and schoolGrade
    if (testScore < 0 || testScore > 50 || schoolGrade < 0 || schoolGrade > 30) {
        return "Invalid Input: Please check testScore (0-50) and schoolGrade (0-30)";
    }

    // Calculate initial score (testScore + schoolGrade)
    let finalScore = testScore + schoolGrade;

    // Add 20 points if parent profession is "farmer"
    if (parentProfession.toLowerCase() === "farmer") {
        finalScore += 20;
    }

    // Determine if Rajib qualifies for admission
    if (finalScore >= 80) {
        return `Final Score: ${finalScore}. Rajib qualifies for admission.`;
    } else {
        return `Final Score: ${finalScore}. Rajib does not qualify for admission.`;
    }
}

// Example usage:
console.log(calculateFinalScore(45, 25, "farmer"));  // Output: Rajib qualifies for admission.
console.log(calculateFinalScore(40, 20, "teacher")); // Output: Rajib does not qualify for admission.
console.log(calculateFinalScore(50, 30, "farmer"));  // Output: Rajib qualifies for admission.
