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

  // Add to Cart and Quantity Counter
  $(document).ready(function(){
    function bindQuantityCounter(selector) {
        const minusButton = $(selector + ' .minus');
        const plusButton = $(selector + ' .plus');
        const qtyInput = $(selector + ' .qty');
        const addToCartButton = $(selector + ' .addToCart');

        minusButton.on('click', function() {
          if (qtyInput.val() > 0) {
              qtyInput.val(parseInt(qtyInput.val()) - 1);
          } 
          else {
              qtyInput.val(0);
          }
          if (qtyInput.val() === '0') {
              addToCartButton.prop('disabled', true);
          }
      });

      plusButton.on('click', function() {
          qtyInput.val(parseInt(qtyInput.val()) + 1);
          if (qtyInput.val() > 0) {
              addToCartButton.prop('disabled', false);
          }
          else {
            qtyInput.val(0);
        }
        if (qtyInput.val() === '0') {
            addToCartButton.prop('disabled', true);
        }
      });

      qtyInput.on('input', function() {
          if (qtyInput.val() !== '0' && qtyInput.val() > '0') {
              addToCartButton.prop('disabled', false);
          } 
          else if (qtyInput.val() === '') {
            addToCartButton.prop('disabled', true);
          }
          else {
            addToCartButton.prop('disabled', true);
          }
          if (parseInt(qtyInput.val()) < 0) {
            qtyInput.val(0);
          }
          qtyInput.val(qtyInput.val().replace(/[^0-9]/g, ''));
      });
    }

    bindQuantityCounter('#prod1');
    bindQuantityCounter('#prod2');
    bindQuantityCounter('#prod3');
    bindQuantityCounter('#prod4');
    bindQuantityCounter('#prod5');
    bindQuantityCounter('#prod6');
    bindQuantityCounter('#prod7');
});

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