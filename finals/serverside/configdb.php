<?php
// Database configuration
$host = "localhost";
$username = "root";
$password = "";
$database = "db_bread";

// Create a connection to MySQL
$conn = mysqli_connect($host, $username, $password);

// Check if the connection was successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create the database if it doesn't exist
$queryCreateDb = "CREATE DATABASE IF NOT EXISTS $database";
if (mysqli_query($conn, $queryCreateDb)) {
    echo "Database '$database' created successfully.<br>";
} else {
    die("Error creating database: " . mysqli_error($conn));
}

// Select the newly created database
mysqli_select_db($conn, $database);

// Example table creation
$tableName = "loginregister";
$queryCreateTable = "CREATE TABLE IF NOT EXISTS $tableName (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(55) NOT NULL,
    pw VARCHAR(255)
)";

// Drop the table if it exists
$queryDropTable = "DROP TABLE IF EXISTS $tableName";
if (mysqli_query($conn, $queryDropTable)) {
    echo "Table '$tableName' dropped (if existed).<br>";
}

// Create the table
if (mysqli_query($conn, $queryCreateTable)) {
    echo "Table '$tableName' created successfully.<br>";
} else {
    die("Error creating table: " . mysqli_error($conn));
}

// Close the connection
mysqli_close($conn);
?>