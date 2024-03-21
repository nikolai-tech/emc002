<?php
// Start the session
session_start();

// Check if user is logged in
if(!isset($_SESSION['email'])) {
    // Redirect to login page if not logged in
    header("Location: login.php");
    exit();
}

// Database connection details
$servername = "localhost";
$username = "root"; // Database username
$password = ""; // Database password
$dbname = "db_bread"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve the old password from the database based on the user's email
$email = $_SESSION['email'];
$stmt = $conn->prepare("SELECT pw FROM loginregister WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->bind_result($stored_password);
$stmt->fetch();
$stmt->close();

// Check if the old password matches the one stored in the database
if(password_verify($_POST['old-password'], $stored_password)) {
    // Old password matches, proceed with changing the password
    // Hash the new password before updating it in the database
    $new_password_hash = password_hash($_POST['new-password'], PASSWORD_DEFAULT);

    // Update the password in the database with the hashed new password
    $stmt = $conn->prepare("UPDATE loginregister SET pw = ? WHERE email = ?");
    $stmt->bind_param("ss", $new_password_hash, $email);
    $stmt->execute();
    $stmt->close();

    // Redirect the user to a confirmation page or the account details page
    header("Location: ../homepage.php");
    exit();
} else {
    // Old password does not match, display an error message
    echo "Old password does not match.";
}

// Close the database connection
$conn->close();
?>