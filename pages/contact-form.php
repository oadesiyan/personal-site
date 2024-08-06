<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "oluwapelumiadesiyan04@gmail.com"; // Replace with your personal email
    $subject = "New Contact Form Message";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message successfully sent.";
    } else {
        echo "Failed to send message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
