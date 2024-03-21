<?php
// Start the session
session_start();

// Check if user is logged in
if(!isset($_SESSION['email'])) {
    // Redirect to login page if not logged in
    header("Location: login.php");
    exit();
}

// Check if the user has confirmed the deletion
if(isset($_POST['confirm-delete'])) {
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

    // Retrieve the user's email from the session
    $email = $_SESSION['email'];

    // Delete the user's account from the database
    $stmt = $conn->prepare("DELETE FROM loginregister WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->close();

    // Also delete the user_id that is auto-incrementing
    $stmt = $conn->prepare("SELECT user_id FROM loginregister WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->bind_result($user_id);
    $stmt->fetch();
    $stmt->close();

    // Delete any additional data associated with the user (e.g., data in other tables)
    $stmt = $conn->prepare("DELETE FROM loginregister WHERE user_id = ?");
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $stmt->close();

    // Close the database connection
    $conn->close();

    // Redirect the user to a confirmation page or log them out
    session_destroy(); // Destroy all session data
    header("Location: ../homepage.php");
    exit();
}
?>