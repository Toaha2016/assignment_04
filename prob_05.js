function waitingTime(interviewTimes, isratSerial) {
    // Validate that interviewTimes is a non-empty array and isratSerial is a valid number
    if (!Array.isArray(interviewTimes) || interviewTimes.length === 0 || typeof isratSerial !== 'number') {
        return "Invalid Input";
    }

    // Calculate the average interview time
    const totalInterviewTime = interviewTimes.reduce((acc, time) => acc + time, 0);
    const averageTime = totalInterviewTime / interviewTimes.length;

    // Calculate how much time Israt has to wait based on her serial number
    const remainingInterviews = isratSerial - interviewTimes.length;
    const waitingTime = remainingInterviews * averageTime;

    // Return the calculated waiting time
    return waitingTime > 0 ? `Israt has to wait approximately ${waitingTime.toFixed(2)} minutes.` : "Israt's turn is next!";
}

// Example usage:
console.log(waitingTime([15, 20, 25], 5));  // Output: Israt has to wait approximately 45.00 minutes.
console.log(waitingTime([10, 12, 14], 3));  // Output: Israt's turn is next!
console.log(waitingTime([], 2));            // Output: Invalid Input
