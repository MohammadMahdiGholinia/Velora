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

const heroBgs = [ 
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



const bg1 = document.querySelector(".hero-bg-1");
const bg2 = document.querySelector(".hero-bg-2");
const heroTitle = document.querySelector(".hero-title");
const heroSubtitle = document.querySelector(".hero-subtitle");


let count = 0;
let activeBg = bg1;
let inactiveBg= bg2;


function changeHero() {

  const currentBg = heroBgs[count];
  count = (count +1) % heroBgs.length;
  

  [activeBg, inactiveBg] = [inactiveBg, activeBg]

  inactiveBg.style.backgroundImage =`url(${currentBg.image})`;

  inactiveBg.classList.add("active");
  inactiveBg.classList.remove("inactive");

  activeBg.classList.add("inactive");
  activeBg.classList.remove("active");

  heroTitle.classList.add("hide");
  heroSubtitle.classList.add("hide");

  setTimeout(() => {
    
  heroTitle.textContent = currentBg.title;
  heroSubtitle.textContent = currentBg.subTitle;

  heroTitle.classList.remove("hide");
  heroSubtitle.classList.remove("hide");

  }, 600);

  
}


setInterval(changeHero , 5000);
changeHero();


const monthInput = document.getElementById("month-input");
const monthModal = document.getElementById("month-modal");
const monthButtons = document.querySelectorAll(".month-button");

monthInput.addEventListener("click", () => {
  monthModal.classList.add("active");
});

monthButtons.forEach( (button) => {
  button.addEventListener("click", () => {
    monthInput.value = button.textContent;
    monthModal.classList.remove("active");
  });
  
  document.addEventListener("click", (e) => {
  if (!e.target.closest(".hero-field")) {
    monthModal.classList.remove("active");
  }
});
});