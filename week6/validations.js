// Select the username and password input elements
var username = $("#username");
var password = $("#password");

// Select the image elements for each rule
var rule1 = $(".rule1 img");
var rule2 = $(".rule2 img");
var rule3 = $(".rule3 img");
var rule4 = $(".rule4 img");
var rule5 = $(".rule5 img");
var rule6 = $(".rule6 img");
var rule7 = $(".rule7 img");

// Select the button element
var button = $("button");

// Define the regular expressions for the rules
var usernameRegex = /^[a-zA-Z0-9_]{6,}$/; // At least 6 alphanumeric or underscore characters
var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/; // At least 8 characters, including uppercase, lowercase, number, and special character

// Define a function to validate the input values
function validate() {
  // Get the input values
  var usernameVal = username.val();
  var passwordVal = password.val();

  // Check if the username matches the rule 1
  if (usernameVal.length >= 6) {
    // If yes, change the image to rightlogo
    rule1.attr("src", "images/rightlogo.jpg");
  } else {
    // If no, change the image to wronglogo
    rule1.attr("src", "images/wronglogo.jpeg");
  }

  // Check if the username matches the rule 2
  if (usernameVal.indexOf("_") != -1 || usernameVal.match(/[a-zA-Z0-9]/g).length == usernameVal.length) {
    // If yes, change the image to rightlogo
    rule2.attr("src", "images/rightlogo.jpg");
  } else {
    // If no, change the image to wronglogo
    rule2.attr("src", "images/wronglogo.jpeg");
  }

  // Check if the password matches the rule 3
  if (passwordVal.length >= 8) {
    // If yes, change the image to rightlogo
    rule3.attr("src", "images/rightlogo.jpg");
  } else {
    // If no, change the image to wronglogo
    rule3.attr("src", "images/wronglogo.jpeg");
  }

  // Check if the password matches the rule 4
  if (passwordVal.match(/[A-Z]/)) {
    // If yes, change the image to rightlogo
    rule4.attr("src", "images/rightlogo.jpg");
  } else {
    // If no, change the image to wronglogo
    rule4.attr("src", "images/wronglogo.jpeg");
  }

  // Check if the password matches the rule 5
  if (passwordVal.match(/[a-z]/)) {
    // If yes, change the image to rightlogo
    rule5.attr("src", "images/rightlogo.jpg");
  } else {
    // If no, change the image to wronglogo
    rule5.attr("src", "images/wronglogo.jpeg");
  }

  // Check if the password matches the rule 6
  if (passwordVal.match(/[0-9]/)) {
    // If yes, change the image to rightlogo
    rule6.attr("src", "images/rightlogo.jpg");
  } else {
    // If no, change the image to wronglogo
    rule6.attr("src", "images/wronglogo.jpeg");
  }

  // Check if the password matches the rule 7
  if (passwordVal.match(/[!@#$%^&*]/)) {
    // If yes, change the image to rightlogo
    rule7.attr("src", "images/rightlogo.jpg");
  } else {
    // If no, change the image to wronglogo
    rule7.attr("src", "images/wronglogo.jpeg");
  }

  // Check if all the rules are satisfied
  if (usernameVal.length >= 6 && usernameVal.indexOf("_") != -1 || usernameVal.match(/[a-zA-Z0-9]/g).length == usernameVal.length && passwordRegex.test(passwordVal)) {
    // If yes, enable the button
    button.prop("disabled", false);
  } else {
    // If no, disable the button
    button.prop("disabled", true);
  }
}

// Define a function to reset the rules
function reset() {
    // Change all the images to wronglogo
    rule1.attr("src", "images/wronglogo.jpeg");
    rule2.attr("src", "images/wronglogo.jpeg");
    rule3.attr("src", "images/wronglogo.jpeg");
    rule4.attr("src", "images/wronglogo.jpeg");
    rule5.attr("src", "images/wronglogo.jpeg");
    rule6.attr("src", "images/wronglogo.jpeg");
    rule7.attr("src", "images/wronglogo.jpeg");
  }
  
  // Call the reset function after displaying the alert message
  function register() {
    // Clear the input values
    username.val("");
    password.val("");
  
    // Display an alert message
    alert("Registration successful");
  
    // Reset the rules
    reset();
  }
  
// Call the validate function when the input values change
username.on("input", validate);
password.on("input", validate);

// Call the register function when the button is clicked
button.on("click", register);