let preloader = document.getElementById('preloader');
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".nav-item .nav-link");
let sections = document.querySelectorAll(".section");
let header = document.getElementById("home");
let about = document.getElementById("about");
let progressBars = document.querySelectorAll(".progress-bar");
let counter = document.querySelector(".counter");
let counterNums = document.querySelectorAll(".counter .counter-num");
let firstTab = document.getElementById('pills-all-tab');
let started = false;

// Remove Preloader When Page Loaded
window.addEventListener('load', function () {
  preloader.style.display = 'none';
  setTimeout(() => firstTab.click(), 0);
})

window.addEventListener("scroll", function () {

  // Sync Active Link When Scrolling
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`.nav-link[href="#${section.id}"]`)
        .classList.add("active");
    }
  });

  // Show Navbar When Scolling
  if (this.scrollY >= header.offsetHeight) navbar.classList.add("scroll");
  else navbar.classList.remove("scroll");

  // Changing Header Image Position When Scrolling
  header.style.backgroundPositionY = this.scrollY / 5 + "px";

  // Progress Bar Changing Width Animation
  if (this.scrollY >= about.offsetHeight) {
    progressBars.forEach((progressBar) => {
      progressBar.style.width = progressBar.dataset.width;
      progressBar.classList.add('px-3');
    });
  }

  // Start Counter When Scrolling
  if (window.scrollY >= counter.offsetTop - 800) {
    if (!started) counterNums.forEach((num) => count(num));
    started = true;
  }

});

// Counter Function
function count(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) clearInterval(count);
  }, 2000 / goal);
}