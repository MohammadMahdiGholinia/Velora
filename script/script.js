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
     title: "دنیا بزرگ‌تر از چیزی‌ست که فکر می‌کنی",
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

// month modal
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
  
  
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".hero-field")) {
    monthModal.classList.remove("active");
  }
});


// Special tours

const specialTours= [
  {
    cover: "./assets/images/specialtours/international/paris.jpg",
    badge: "ویژه",
    country: "تور فرانسه",
    city: "پاریس",
    startDate: "2025-07-22",
    duration: "9",
    price: "65300000"
  },
  {
  cover: "./assets/images/specialtours/international/bankok.jpg",
  badge: "ویژه",
  country: "تور تایلند",
  city: "بانکوک",
  startDate: "2025-07-22",
  duration: "9",
  nightDuration: "8",
  price: "76200000"
},
  {
  cover: "./assets/images/specialtours/international/dubai.jpg",
  badge: "ویژه",
  country: "تور امارات",
  city: "دوبی",
  startDate: "2025-07-22",
  duration: "9",
  price: "58200000"
},
  {
  cover: "./assets/images/specialtours/international/istanbul.jpg",
  badge: "ویژه",
  country: "تور ترکیه",
  city: "استانبول",
  startDate: "2025-07-22",
  duration: "9",
  price: "56700000"
},
  {
  cover: "./assets/images/specialtours/international/venice.jpg",
  badge: "ویژه",
  country: "تور ایتالیا",
  city: "ونیز",
  startDate: "2025-07-22",
  duration: "9",
  price: "62150000"
},
  {
  cover: "./assets/images/specialtours/international/antalya.jpg",
  badge: "ویژه",
  country: "تور ترکیه",
  city: "آنتالیا",
  startDate: "2025-07-22",
  duration: "9",
  price: "45900000"
}
];

// function generateDate(date) {

//   return moment(date).format("jYYYY/jMM/jDD");
// }


function dateGenerator(startDate) {
  const date = new Date(startDate);

  const options = {
    day: "numeric",
    month: "long"
  };

  return date.toLocaleDateString('fa-IR', options);

}

function titleGenerator(country, city) {

  return `${country}، ${city}`

}

function durationGenerator(duration) {
  const day=Number(duration)
  const newDay = new Intl.NumberFormat('fa-IR').format(day);
  const night = day- 1;
  const newNight = new Intl.NumberFormat('fa-IR').format(night);
  return `${newDay} روز و  ${newNight} شب`;

}
// function generateStars(stars) {
//   let starsHTML = ``;

//   for (let i=1; i<=5; i++) {
//     if (i<=stars) {
//       starsHTML += `<span class="star filled">
//       <ion-icon name="star"></ion-icon>
//       </span>`;
//     }
//     else {
//       starsHTML += `<span class="star empty">
//       <ion-icon name="star-outline"></ion-icon>
//       </span>`;
//     }
//   }

//   return starsHTML;
// }

const toursGrid = document.querySelector(".tours-grid");

function renderTours() {
  toursGrid.innerHTML = ``;

  specialTours.forEach((tour) => {

    const card = document.createElement("div");
    card.classList.add("tour-card");

    card.innerHTML= `
    <a href="#"> 
        <div class="tour-card-image">
        <img src="${tour.cover}" alt="${tour.country}">
        <span class="tour-card-badge"> ${tour.badge}</span>
    </div>

    <div class="tour-card-content">
      <div class="tour-card-header">
      <h3 class="tour-card-header-title">${titleGenerator(tour.country, tour.city)}</h3>
      <div class="tour-card-header-start">
      ${dateGenerator(tour.startDate)}
      </div>
      
    </div>

      <div class="tour-card-meta">
        <div class="tour-duration"> ${durationGenerator(tour.duration)} </div>
      </div>
      
  
      <div class="tour-card-price"> 
        <span>${new Intl.NumberFormat('fa-IR').format(tour.price)}</span> تومان
      </div>
    
      <div class="tour-card-attention"><ion-icon name="alert-circle-outline"></ion-icon> شامل حمل و نقل، اقامت و خدمات تور</div>
    </div>
    </a>

    `;

    toursGrid.appendChild(card);



  });

}

renderTours();



