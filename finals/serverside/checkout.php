<?php
// Start the session (if not already started)
session_start();

// Check if the user is logged in
if (!isset($_SESSION['email'])) {
    die("User not logged in.");
}

// Establish database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_bread";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Receive JSON data sent from JavaScript
$data = json_decode(file_get_contents("php://input"), true);

// Check if data is valid
if (!is_array($data)) {
    die("Invalid item data received.");
}

// Get the user ID from the session
$user_email = $_SESSION['email'];

// Fetch the user ID from the database based on the email address
$stmt = $conn->prepare("SELECT user_id FROM loginregister WHERE email = ?");
$stmt->bind_param("s", $user_email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $user_id = $row['user_id'];
} else {
    die("User not found.");
}
$stmt->close();

// Insert a new record into the checkout table
$order_date = date("Y-m-d H:i:s");

$stmt = $conn->prepare("INSERT INTO checkout (user_id, order_date) VALUES (?, ?)");
$stmt->bind_param("is", $user_id, $order_date);
$stmt->execute();

// Get the ID of the inserted order
$order_id = $conn->insert_id;

// Insert each item into the checkout table
foreach ($data as $item) {
    $product_id = $item['productId'];
    $quantity = $item['quantity'];
    $price = $item['price'];
    
    // Insert the item into the checkout table
    $stmt = $conn->prepare("INSERT INTO checkout (user_id, quantity, product_id, price) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("iiid", $user_id, $quantity, $product_id, $price);
    $stmt->execute();
    
    // Update the products table to decrease the quantity
    $stmt = $conn->prepare("UPDATE products SET quantity = quantity - ? WHERE product_id = ?");
    $stmt->bind_param("ii", $quantity, $product_id);
    $stmt->execute();
}

$stmt->close();
$conn->close();

echo "Checkout successful!";
?>