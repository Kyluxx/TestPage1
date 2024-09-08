// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Theme switcher functionality
const themeSwitcher = document.getElementById("theme-switcher");
const body = document.body;

themeSwitcher.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    themeSwitcher.textContent = "Light Mode";
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    themeSwitcher.textContent = "Dark Mode";
  }
});

// Modal functionality
const aboutLink = document.getElementById("about-link");
const modal = document.getElementById("aboutModal");
const closeModal = document.querySelector(".close");

// Open modal when "About" is clicked
aboutLink.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "block";
});

// Close modal when the "x" is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});