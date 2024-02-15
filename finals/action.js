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
          } else {
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
          if (qtyInput.val() === '0') {
              addToCartButton.prop('disabled', true);
          } else {
              addToCartButton.prop('disabled', false);
          }
          if (parseInt(qtyInput.val()) < 0) {
            qtyInput.val(0);
          }
          qtyInput.val(qtyInput.val().replace(/[^0-9]/g, ''));
      });
    }

    bindQuantityCounter('.prod1');
    bindQuantityCounter('.prod2');
    bindQuantityCounter('.prod3');
    bindQuantityCounter('.prod4');
    bindQuantityCounter('.prod5');
    bindQuantityCounter('.prod6');
    bindQuantityCounter('.prod7');
});