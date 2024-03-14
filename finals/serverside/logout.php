<?php
// Start session
session_start();

// Unset all session variables
$_SESSION = array();

// Destroy the session
session_destroy();

// Redirect to the main page section of homepage.php
header("Location: ../homepage.php#mainpage");
exit();
?>