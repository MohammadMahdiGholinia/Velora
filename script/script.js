const loader = document.getElementById("preloader");

document.body.style.overflow = "hidden";

window.addEventListener("load", () => { 
  loader.classList.add("hidden");
  document.body.style.overflow = "auto";
});



/**
 * add event on multiple elements
 */

const addEventOnElements = function(elements, eventType, callback) {
  const len = elements.length
  for (let i=0; i < len; i++) {
    elements[i].addEventListener(eventType, callback)
  }
}

/**
 * Navbar toggler for mobile
 */

const navbar = document.querySelector("[data-nav]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () { 
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);


/**
 * Header
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  }
  else {
    header.classList.remove("active");
  }

}
);




