<?php
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
    // Retrieve email and password from the signup form
    $email = isset($_POST['register-email']) ? $_POST['register-email'] : '';
    $password = isset($_POST['register-password']) ? $_POST['register-password'] : '';

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Check if the account already exists in the database
    $stmt_check = $conn->prepare("SELECT * FROM loginregister WHERE email = ?");
    if (!$stmt_check) {
        die("Error in preparing statement: " . $conn->error);
    }
    $stmt_check->bind_param("s", $email);
    if (!$stmt_check->execute()) {
        die("Error in executing statement: " . $stmt_check->error);
    }
    $result = $stmt_check->get_result();

    if ($result->num_rows > 0) {
        // Account already exists
        echo "Account with this email already exists";
    } else {
        // Account does not exist, proceed with registration
        $stmt_insert = $conn->prepare("INSERT INTO loginregister (email, pw) VALUES (?, ?)");
        if (!$stmt_insert) {
            die("Error in preparing statement: " . $conn->error);
        }
        $stmt_insert->bind_param("ss", $email, $hashed_password);
        if (!$stmt_insert->execute()) {
            die("Error in executing statement: " . $stmt_insert->error);
        }
        echo "Registration successful";

        // Redirect to the loginRegister page
        header("Location: ../homepage.php#loginRegister");
        exit(); // Ensure that script execution stops after redirection
    }

    // Close statement and connection
    $stmt_check->close();
    $conn->close();
}
?>