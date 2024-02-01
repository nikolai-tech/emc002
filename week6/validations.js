// User data list
var users = [];
// Function to add a user
function addUser() 
{
 var username = document.getElementById("username").value;
 var password = document.getElementById("password").value;
 // Validate username and password
 if (username === "" || password === "") 
 {
 alert("Please enter both username and password.");
 return;
 }

 // Username validation
if (username.length < 6 || username.match(/[^A-Za-z0-9\s_]/)) {
alert("Username must be at least 6 characters long. Username must not contain special characters except underscore.");
return;
}

 // Password validation
 if (password.length < 8 ||
 !password.match(/[A-Z]/) ||
 !password.match(/[a-z]/) ||
 !password.match(/[0-9]/) ||
 !password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)) {
 alert("Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character.");
 return;
 }
 // Check if the username already exists
 for (var i = 0; i < users.length; i++) 
 {
 if (users[i].username === username) 
 {
 alert("Username already exists.");
 alert("Please input another username.");
 return;
 }
 }
 // Add the user to the array
 users.push({ username: username, password: password });
 alert("User added successfully.");
}
// Function to validate a user
function validateUser() {
 var username = document.getElementById("username").value;
 var password = document.getElementById("password").value;
 // Check if the username and password exist in the array
 for (var i = 0; i < users.length; i++) 
 {
 if (users[i].username === username && users[i].password === password) 
 {
 alert("This user already exists.");
 alert("Login successful.");
 return;
 }
 else if(users[i].username !== username || users[i].password !== password) 
 {
 alert("Login unsuccessful. Username or password is incorrect. Please try again.");
 return;
 }
 }
 alert("This user doesn't exist in the list yet.");
}
// Function to clear the input fields
function clearFields() {
 document.getElementById("username").value = "";
 document.getElementById("password").value = "";
}