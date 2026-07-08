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
    image:"../assets/images/testresultimg/venice1.jpg",
  },

  {
     image:"../assets/images/testresultimg/venice2.jpg",

  },

  { 
    image:"../assets/images/testresultimg/venice3.jpg",

  },

  {
   image:"../assets/images/testresultimg/venice4.jpg" ,
  }
  
  ];



const bg1 = document.querySelector(".hero-bg-1");
const bg2 = document.querySelector(".hero-bg-2");

// const heroSubtitle = document.querySelector(".hero-subtitle");


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

  // heroTitle.classList.add("hide");
  // heroSubtitle.classList.add("hide");

  setTimeout(() => {
    

  // heroSubtitle.textContent = currentBg.subTitle;

  // heroTitle.classList.remove("hide");
  // heroSubtitle.classList.remove("hide");

  }, 600);

  
}


setInterval(changeHero , 8000);
changeHero();



//hero title

document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.getElementById("result-tours-title-h2");

  const pageData = {
    searchTitle: "ایتالیا"
  };

  if (heroTitle) {
    heroTitle.textContent = `تورهای ${pageData.searchTitle}`;
  }
});


// Special tours

const specialTours= [
  {
    cover: "../assets/images/specialtours/international/paris.jpg",
    badge: "ویژه",
    country: "تور فرانسه",
    city: "پاریس",
    startDate: "2025-07-22",
    duration: "9",
    price: "65300000"
  },
  {
  cover: "../assets/images/specialtours/international/bankok.jpg",
  badge: "ویژه",
  country: "تور تایلند",
  city: "بانکوک",
  startDate: "2025-07-22",
  duration: "3",
  price: "76200000"
},
  {
  cover: "../assets/images/specialtours/international/dubai.jpg",
  badge: "ویژه",
  country: "تور امارات",
  city: "دوبی",
  startDate: "2025-07-22",
  duration: "5",
  price: "58200000"
},
  {
  cover: "../assets/images/specialtours/international/istanbul.jpg",
  badge: "ویژه",
  country: "تور ترکیه",
  city: "استانبول",
  startDate: "2025-07-22",
  duration: "11",
  price: "56700000"
},
  {
  cover: "../assets/images/specialtours/international/venice.jpg",
  badge: "ویژه",
  country: "تور ایتالیا",
  city: "ونیز",
  startDate: "2025-07-22",
  duration: "8",
  price: "62150000"
},
  {
  cover: "../assets/images/specialtours/international/antalya.jpg",
  badge: "ویژه",
  country: "تور ترکیه",
  city: "آنتالیا",
  startDate: "2025-07-22",
  duration: "4",
  price: "45900000"
},
  {
  cover: "../assets/images/specialtours/international/antalya.jpg",
  badge: "ویژه",
  country: "تور ترکیه",
  city: "آنتالیا",
  startDate: "2025-07-22",
  duration: "4",
  price: "45900000"
},
  {
  cover: "../assets/images/specialtours/international/antalya.jpg",
  badge: "ویژه",
  country: "تور ترکیه",
  city: "آنتالیا",
  startDate: "2025-07-22",
  duration: "4",
  price: "45900000"
},
  {
  cover: "../assets/images/specialtours/international/antalya.jpg",
  badge: "ویژه",
  country: "تور ترکیه",
  city: "آنتالیا",
  startDate: "2025-07-22",
  duration: "4",
  price: "45900000"
},
  {
  cover: "../assets/images/specialtours/international/antalya.jpg",
  badge: "ویژه",
  country: "تور ترکیه",
  city: "آنتالیا",
  startDate: "2025-07-22",
  duration: "4",
  price: "45900000"
},
  {
  cover: "../assets/images/specialtours/international/antalya.jpg",
  badge: "ویژه",
  country: "تور ترکیه",
  city: "آنتالیا",
  startDate: "2025-07-22",
  duration: "4",
  price: "45900000"
},
  {
  cover: "../assets/images/specialtours/international/antalya.jpg",
  badge: "ویژه",
  country: "تور ترکیه",
  city: "آنتالیا",
  startDate: "2025-07-22",
  duration: "4",
  price: "45900000"
},
  {
  cover: "../assets/images/specialtours/international/antalya.jpg",
  badge: "ویژه",
  country: "تور ترکیه",
  city: "آنتالیا",
  startDate: "2025-07-22",
  duration: "4",
  price: "45900000"
}
];

// function generateDate(date) {

//   return moment(date).format("jYYYY/jMM/jDD");
// }



// filter

let filteredTours = specialTours;   //یعدا اینو بیار تو api

function filterTours(type) {
  let sorted=[...filteredTours];

  if (type==="cheap") {
    sorted.sort((a,b) => a.price - b.price);

  }
  else if (type==="expensive") {
    sorted.sort((a,b)=> b.price - a.price)
  }

  else if (type==="duration") {
    sorted.sort((a,b) => b.duration - a.duration);
  }
  else if (type==="default") {
    sorted=[...specialTours]
  }

  filteredTours= sorted;
  renderTours(filteredTours);
}

const filters =document.querySelector("[data-filters]");
const filterToggle=document.querySelector("[data-filter-toggle]");
const toggleIcon= document.querySelector(".chevron")

filterToggle.addEventListener("click", ()=> {
  filters.classList.toggle("active");

  let state= filters.classList.contains("active");
  toggleIcon.setAttribute(
    "name",
    state ? "chevron-up-outline" : "chevron-down-outline"
  );
});


const sortRadios= document.querySelectorAll('input[name="sort"]');
sortRadios.forEach(radio => {
  radio.addEventListener("change", function() {
    filterTours(radio.value);
  });
});



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


//animation

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.1
});

const toursGrid = document.querySelector(".tours-grid");

function renderTours(filteredTours) {
  toursGrid.innerHTML = ``;
  const fragment = document.createDocumentFragment();
  filteredTours.forEach((tour, index) => {

    const card = document.createElement("div");
    card.classList.add("tour-card");

    card.innerHTML= `
    <a href="#"> 
      <div class="tour-card-inner">
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
          <div class="tour-duration"> 
            <img class="icon" src="../assets/icon/duration.svg" height="38" alt="logo">
            ${durationGenerator(tour.duration)} </div>
          </div>
        
    
        <div class="tour-card-price"> 
          <span>${new Intl.NumberFormat('fa-IR').format(tour.price)}</span> تومان
        </div>

          <div class="tour-card-attention">
            <ion-icon ion-icon name="alert-circle-outline"></ion-icon>
            شامل حمل و نقل، اقامت و خدمات تور
            </div>

    </a>

    `;
  fragment.appendChild(card);
  });
  toursGrid.appendChild(fragment);
  requestAnimationFrame(() => {
    document.querySelectorAll(".tour-card").forEach(card => {
      observer.observe(card);
    });
  });

  

}


renderTours(filteredTours);
