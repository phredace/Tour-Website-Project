<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $package = $_POST["package"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $location = $_POST["location"];
    $guests = $_POST["guests"];
    $arrivalDate = $_POST["arrivals"];
    $departureDate = $_POST["leaving"];

    // Compose email message
    $to = "phredacegates@gmail.com"; // Replace with your email address
    $subject = "New Booking: $name";
    $message = "Package: $package\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Address: $address\n";
    $message .= "Destination: $location\n";
    $message .= "Number of Guests: $guests\n";
    $message .= "Arrival Date: $arrivalDate\n";
    $message .= "Departure Date: $departureDate\n";

    // Additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    mail($to, $subject, $message, $headers);

    // You can add additional logic here, such as redirecting the user to a thank you page
    header("Location: thank_you.html");
    exit();
}
?>
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $package = $_POST["package"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $location = $_POST["location"];
    $guests = $_POST["guests"];
    $arrivalDate = $_POST["arrivals"];
    $departureDate = $_POST["leaving"];

    // Create a PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'mail.bonvastours.com'; // Your SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = '_mainaccount@bonvastours.com'; // Your SMTP username
        $mail->Password   = 'Your_cPanel_password'; // Your SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SSL; // Use SSL encryption
        $mail->Port       = 465; // SMTP port

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('phredacegates@gmail.com'); // Replace with your email address

        // Compose email message
        $mail->isHTML(true);
        $mail->Subject = "New Booking: $name";
        $mail->Body = "Package: $package\n";
        $mail->Body .= "Name: $name\n";
        $mail->Body .= "Email: $email\n";
        $mail->Body .= "Phone: $phone\n";
        $mail->Body .= "Address: $address\n";
        $mail->Body .= "Destination: $location\n";
        $mail->Body .= "Number of Guests: $guests\n";
        $mail->Body .= "Arrival Date: $arrivalDate\n";
        $mail->Body .= "Departure Date: $departureDate\n";

        // Send email
        $mail->send();

        // You can add additional logic here, such as redirecting the user to a thank you page
        header("Location: thank_you.html");
        exit();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>