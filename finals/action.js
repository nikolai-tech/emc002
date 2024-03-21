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

  // Search  Functionality
    // For the mainpage
document.querySelector('.search-bar').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const products = document.querySelectorAll('.product');
      
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
          if (productName.includes(searchTerm)) {
              product.style.display = 'block';
          } else {
              product.style.display = 'none';
          }
      });
  });

      // For the products section
document.querySelector('.search-bar').addEventListener('input', function(event) {
  const searchTerm = event.target.value.toLowerCase();
  const products = document.querySelectorAll('.display');

  products.forEach(product => {
      const productName = product.querySelector('h3').textContent.toLowerCase();
      const productDescription = product.querySelector('p').textContent.toLowerCase();
      if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
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
  
    // Section visibility for Bread
    function showSectionMain(sectionId) {
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
        section.style.display = 'flex';
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

// Authentication for Cart
function checkLoggedIn() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'serverside/check_login.php');
  xhr.onload = function() {
      if (xhr.status === 200) {
          const isLoggedIn = xhr.responseText === 'true';
          const cartLink = document.querySelector('.cart a');
          cartLink.addEventListener('click', function(event) {
              if (!isLoggedIn) {
                  event.preventDefault();
                  alert('Please log in to access your cart.');
              } else {
                  showSection('checkout');
              }
          });
      }
  };
  xhr.send();
}

window.addEventListener('load', checkLoggedIn);

// Cart Proper
function addToCart(productName, price, productId) {
  // Retrieve the quantity input for the selected product
  const productContainer = document.getElementById(`prod${productId}`);
  if (!productContainer) {
    console.error(`Product container not found for product ID ${productId}`);
    return;
  }

  const quantityInput = productContainer.querySelector('.qty');
  const quantity = parseInt(quantityInput.value);

  // Calculate total price for the product
  const totalPrice = price * quantity;

  // Check if the product is already in the cart
  const existingCartItem = document.querySelector(`#checkout .cart-item[data-product-id="${productId}"]`);

  if (existingCartItem) {
    // If the product is already in the cart, update its quantity and total price
    const quantityElement = existingCartItem.querySelector('.quantity');
    const currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + quantity;

    // Update total price
    const totalPriceElement = existingCartItem.querySelector('.total-price');
    const currentTotalPrice = parseFloat(totalPriceElement.textContent.substr(1)); // Remove '₱' symbol
    totalPriceElement.textContent = `₱${(currentTotalPrice + totalPrice).toFixed(2)}`;
  } else {
    // If the product is not in the cart, add it as a new item with the specified quantity
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item'); // Add the 'cart-item' class
    cartItem.setAttribute('data-product-id', productId);
    cartItem.innerHTML = `
      <p>${productName} - ₱${price.toFixed(2)} x <span class="quantity">${quantity}</span></p>
      <p>Total: <span class="total-price">₱${totalPrice.toFixed(2)}</span></p>
      <button class="removeFromCart" onclick="removeFromCart(${productId})">Remove</button>
    `;

    // Add the cart item to the checkout section
    const checkoutSection = document.getElementById('checkout');
    checkoutSection.insertBefore(cartItem, checkoutSection.lastElementChild); // Insert before the last child
  }

  // Update the total amount
  updateTotalAmount();
}

// Function to remove product from cart
function removeFromCart(productId) {
  // Find the cart item with the specified product ID
  const cartItem = document.querySelector(`#checkout .cart-item[data-product-id="${productId}"]`);
  
  if (cartItem) {
    // Remove the cart item from the checkout section
    cartItem.remove();
    // Update the total amount after removing the item
    updateTotalAmount();
  } else {
    console.error(`Cart item not found for product ID ${productId}`);
  }
}

// Function to update the total amount
function updateTotalAmount() {
  const totalPriceElements = document.querySelectorAll('.total-price');
  let totalAmount = 0;
  totalPriceElements.forEach(element => {
    const price = parseFloat(element.textContent.substr(1)); // Remove '₱' symbol
    totalAmount += price;
  });

  // Find the last cart item
  const lastCartItem = document.querySelector('.cart-item:last-of-type');

  // Update the total amount at the bottom of the last cart item
  if (lastCartItem) {
    const totalAmountElement = lastCartItem.querySelector('.total-amount');
    if (totalAmountElement) {
      totalAmountElement.textContent = `Total Amount: ₱${totalAmount.toFixed(2)}`;
    } else {
      const newTotalAmountElement = document.createElement('p');
      newTotalAmountElement.classList.add('total-amount');
      newTotalAmountElement.textContent = `Total Amount: ₱${totalAmount.toFixed(2)}`;
      lastCartItem.appendChild(newTotalAmountElement);
    }

    // Ensure Confirm Checkout button exists
    ensureConfirmCheckoutButton(lastCartItem);
  }

  // Ensure Confirm Checkout button exists in case there are no cart items
  if (!lastCartItem) {
    ensureConfirmCheckoutButton(null);
  }
}

// Function to ensure Confirm Checkout button exists in the last cart item or outside if there are no cart items
function ensureConfirmCheckoutButton(parentElement) {
  const confirmCheckoutButton = document.querySelector('.confirm-checkout');
  if (!confirmCheckoutButton) {
    const newConfirmCheckoutButton = document.createElement('button');
    newConfirmCheckoutButton.textContent = 'Confirm Checkout';
    newConfirmCheckoutButton.classList.add('confirm-checkout');
    newConfirmCheckoutButton.onclick = confirmCheckout;
    
    if (parentElement) {
      parentElement.appendChild(newConfirmCheckoutButton);
    } else {
      const checkoutSection = document.getElementById('checkout');
      checkoutSection.appendChild(newConfirmCheckoutButton);
    }
  }
}

// Function to handle confirm checkout action
function confirmCheckout() {
  // Get all cart items
  const cartItems = document.querySelectorAll('.cart-item');
  const checkoutData = [];

  // Iterate over each cart item to collect checkout data
  cartItems.forEach(cartItem => {
    const productName = cartItem.querySelector('p:first-of-type').textContent.trim().split(' - ')[0];
    const price = parseFloat(cartItem.querySelector('.total-price').textContent.substr(1));
    const quantity = parseInt(cartItem.querySelector('.quantity').textContent);
    const productId = cartItem.getAttribute('data-product-id'); // Assuming you store productId as a data attribute in each cart item
    checkoutData.push({ productName, price, quantity, productId });
  });

  console.log(checkoutData); // Log the checkout data

  // Send the checkout data to the PHP script using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "serverside/checkout.php", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText); // Log the response from the PHP script
      // Check if checkout was successful and display alert
      if (xhr.responseText === "Checkout successful!") {
        alert("Checkout was successful. Thank you for purchasing.");
      }
    }
  };
  xhr.send(JSON.stringify(checkoutData));
}

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
