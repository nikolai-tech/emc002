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