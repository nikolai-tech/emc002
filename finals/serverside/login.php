<?php
// Start the session
if (session_status() == PHP_SESSION_NONE) {
    session_start();
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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve email and password from the login form
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // Check if the account exists in the database
    $stmt_check = $conn->prepare("SELECT * FROM loginregister WHERE email = ?");
    if (!$stmt_check) {
        die("Error in preparing statement: " . $conn->error);
    }
    $stmt_check->bind_param("s", $email);
    if (!$stmt_check->execute()) {
        die("Error in executing statement: " . $stmt_check->error);
    }
    $result = $stmt_check->get_result();

    if ($result->num_rows == 0) {
        // Account does not exist
        echo "Account does not exist. Please register.";
    } else {
        // Account exists, verify password
        $row = $result->fetch_assoc();
        $stored_password = $row['pw'];

        if (password_verify($password, $stored_password)) {
            // Password is correct, login user
            echo "Login successful";
            $_SESSION['email'] = $email;
            // Redirect to main page
            header("Location: ../homepage.php");
            exit();
        } else {
            // Password is incorrect
            echo "Incorrect password";
        }
    }

    // Close statement and connection
    $stmt_check->close();
    $conn->close();
}
?>