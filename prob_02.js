function sendNotification(email) {
    // Split the email into username and domain name
    const [username, domain] = email.split('@');

    // Create the notification message
    const message = `Notification: Your username is ${username} and your domain is ${domain}.`;

    // Return the notification message
    return message;
}

// Example usage:
const email = "zihad.ph@gmail.com";
const notification = sendNotification(email);
console.log(notification);
