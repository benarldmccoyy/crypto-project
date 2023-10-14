'use strict';


// **
//   add event on Element
// **

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; 1 < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


// **
//  navbar Toggle 
// **

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

// **
//  action header when window scroll down to 100px
// **

const header = document.querySelector("[data-header]");

const activeElemOnScroll =function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll",activeElemOnScroll);