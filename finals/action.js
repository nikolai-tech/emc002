// Dropdown
function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("active");
    const dropdownButton = document.querySelector(".dropdown-button");
    dropdownButton.classList.toggle("yellow");
  }
  
  function closeDropdown() {
    const dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.remove("active");
    const dropdownButton = document.querySelector(".dropdown-button");
    dropdownButton.classList.remove("yellow");
  }
  
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown-button") && document.getElementById("dropdown-content").classList.contains("active")) {
      const dropdownContent = document.getElementById("dropdown-content");
      dropdownContent.classList.remove("active");
      const dropdownButton = document.querySelector(".dropdown-button");
      dropdownButton.classList.remove("yellow");
    }
  });

  // Section visibility
  function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (section.id !== sectionId) {
        section.style.display = 'none';
      }
    });
  
    // Show the specified section
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.style.display = 'block';
    }
  }
  
  // For the Profile Options
  function showSectionVisible(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.style.display = (section.style.display === 'none') ? 'block' : 'none';
    }
  }
  
// Add to Cart and Quantity Counter
$(document).ready(function(){
  function bindQuantityCounter(selector) {
      const minusButton = $(selector + ' .minus');
      const plusButton = $(selector + ' .plus');
      const qtyInput = $(selector + ' .qty');
      const addToCartButton = $(selector + ' .addToCart');

      // Set initial value of quantity input to 1
      qtyInput.val(1);

      minusButton.on('click', function() {
        if (qtyInput.val() > 0) {
            qtyInput.val(parseInt(qtyInput.val()) - 1);
        } 
        if (qtyInput.val() === '0') {
            addToCartButton.prop('disabled', true);
        }
    });    

      plusButton.on('click', function() {
          qtyInput.val(parseInt(qtyInput.val()) + 1);
          addToCartButton.prop('disabled', false); // Enable button when quantity increases
      });

      qtyInput.on('input', function() {
          // Ensure quantity is a positive integer
          qtyInput.val(qtyInput.val().replace(/[^0-9]/g, ''));

          if (qtyInput.val() === '') {
              qtyInput.val(1); // Set to 1 if input is empty
          }

          if (parseInt(qtyInput.val()) < 1) {
              qtyInput.val(1); // Ensure quantity doesn't go below 1
          }

          // Enable/disable button based on quantity
          if (parseInt(qtyInput.val()) === 1) {
              addToCartButton.prop('disabled', true);
          } else {
              addToCartButton.prop('disabled', false);
          }
      });
  }

  // Bind quantity counter for each product
  bindQuantityCounter('#prod1');
  bindQuantityCounter('#prod2');
  bindQuantityCounter('#prod3');
  bindQuantityCounter('#prod4');
  bindQuantityCounter('#prod5');
  bindQuantityCounter('#prod6');
  bindQuantityCounter('#prod7');
});

// Cart Proper
// Function to add product to cart and checkout section
// function addToCart(productName, price, productId) {
//   // Retrieve the quantity input for the selected product
//   const quantityInput = document.querySelector(`#qty-${productId}`);
//   const quantity = parseInt(quantityInput.value);

//   // Check if the product is already in the cart
//   const existingCartItem = document.querySelector(`#checkout .cart-item[data-product-id="${productId}"]`);

//   if (existingCartItem) {
//     // If the product is already in the cart, update its quantity
//     const quantityElement = existingCartItem.querySelector('.quantity');
//     const currentQuantity = parseInt(quantityElement.textContent);
//     quantityElement.textContent = currentQuantity + quantity;

//     // Update total price
//     const totalPriceElement = existingCartItem.querySelector('.total-price');
//     const currentTotalPrice = parseFloat(totalPriceElement.textContent.substr(2)); // Remove '₱' symbol
//     totalPriceElement.textContent = `₱${(currentTotalPrice + (price * quantity)).toFixed(2)}`;
//   } else {
//     // If the product is not in the cart, add it as a new item with the specified quantity
//     const cartItem = document.createElement('div');
//     cartItem.classList.add('cart-item'); // Add the 'cart-item' class
//     cartItem.setAttribute('data-product-id', productId);
//     cartItem.innerHTML = `
//       <p>${productName} - ₱${price.toFixed(2)} x <span class="quantity">${quantity}</span></p>
//       <p>Total: <span class="total-price">₱${(price * quantity).toFixed(2)}</span></p>
//     `;

//     // Add the cart item to the checkout section
//     const checkoutSection = document.getElementById('checkout');
//     checkoutSection.appendChild(cartItem);
//   }
// }

// // Add event listener to all "Add to Cart" buttons
// document.querySelectorAll('.addToCart').forEach(button => {
//   button.addEventListener('click', function() {
//     const productDiv = button.closest('.product');
//     const productName = productDiv.querySelector('h3').textContent;
//     const productId = productDiv.id.split('prod')[1];
//     const priceString = productDiv.querySelector('p').textContent.split('₱')[1];
//     const price = parseFloat(priceString);

//     addToCart(productName, price, productId);
//   });
// });

// Login/Register
function toggleRegister() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  loginForm.style.display = "none";
  registerForm.style.display = "block";
}

function toggleLogin() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  loginForm.style.display = "block";
  registerForm.style.display = "none";
}

// Password Validation
function hasNumber(mystring) {
  return /\d/.test(mystring);
}

function hasUpperCase(mystring) {
  return /[A-Z]/.test(mystring);
}

function hasLowerCase(mystring) {
  return /[a-z]/.test(mystring);
}

function hasSpecialChar(mystring) {
  return /[!@#$%^&*(),.?":{}|<>]/.test(mystring);
}

var password = document.getElementById("register-password");

password.addEventListener("input", function() {
  if (password.value.length < 8) {
    password.setCustomValidity("Must be at least 8 characters long.");
  } else if (!hasNumber(password.value)) {
    password.setCustomValidity("Must contain at least one number.");
  } else if (!hasUpperCase(password.value)) {
    password.setCustomValidity("Must contain at least one uppercase letter.");
  } else if (!hasLowerCase(password.value)) {
    password.setCustomValidity("Must contain at least one lowercase letter.");
  } else if (!hasSpecialChar(password.value)) {
    password.setCustomValidity("Must contain at least one special character.");
  } else {
    password.setCustomValidity("");
  }
});

// Email validation
var email = document.getElementById("register-email");

email.addEventListener("input", function() {
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email.value)) {
    email.setCustomValidity("Please enter a valid email address.");
  } else {
    email.setCustomValidity("");
  }
});

//Change password
function validateForm() {
  var oldPassword = document.getElementById("old-password").value;
  var newPassword = document.getElementById("new-password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Check if old password is empty
  if (oldPassword.trim() === "") {
    alert("Please enter your old password.");
    return false;
  }

  // Check if new password is empty
  if (newPassword.trim() === "") {
    alert("Please enter your new password.");
    return false;
  }

  // Check if new password meets minimum length requirement (e.g., 6 characters)
  if (newPassword.length < 6) {
    alert("New password must be at least 6 characters long.");
    return false;
  }

  // Check if confirm password matches new password
  if (confirmPassword !== newPassword) {
    alert("New password and confirm password do not match.");
    return false;
  }

  // Form is valid, allow submission
  return true;
}
