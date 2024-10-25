'use strict';

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {

  // navbar toggle in mobile
  const $navbar = document.querySelector("[data-navbar]");
  const $navToggler = document.querySelector("[data-nav-toggler]");

  if ($navbar && $navToggler) {
    $navToggler.addEventListener("click", () => {
      $navbar.classList.toggle("active");
    });
  } else {
    console.error("Navbar or toggler not found!");
  }

});

// HEADER SCROLL STATE

const $header = document.querySelector("[data-header]");

document.addEventListener("DOMContentLoaded", () => {
    const $header = document.querySelector("[data-header]");
    window.addEventListener("scroll", () => {
      $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
    //   alert("Scroll event detected");
    });
  });
  
