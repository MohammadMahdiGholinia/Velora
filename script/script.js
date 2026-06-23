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


// Hero Section 

const heroImages = [ 
  { 
    image:"./assets/images/paris1.jpg",
    title: "هر سفر، یک داستان تازه",
    subTitle: "تورهای داخلی و خارجی رو جستجو کن و بهترین تجربه سفر رو بساز"
  },

  {
     image:"./assets/images/paris2.jpg",
     title: "جهان بزرگ‌تر از چیزی‌ست که فکر می‌کنی",
     subTitle: "وقتشه ببینی اون بیرون چه چیزهایی منتظر توئه."
  },

  { 
    image:"./assets/images/paris3.jpg",
    title: "مقصدتو پیدا کن",
    subTitle: "جستجو کن، انتخاب کن، سفر کن." 
  },

  {
   image:"./assets/images/paris4.jpg" ,
   title: "سفرهای خاص برای آدم‌های خاص",
   subTitle: "تجربه‌هایی فراتر از یک سفر معمولی."
  }
  
  ];


