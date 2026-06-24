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
    image:"static/images/paris1.jpg",
    title: "هر سفر، یک داستان تازه",
    subTitle: "تورهای داخلی و خارجی رو جستجو کن و بهترین تجربه سفر رو بساز"
  },

  {
     image:"static/images/paris2.jpg",
     title: "دنیا بزرگ‌تر از چیزی‌ست که فکر می‌کنی",
     subTitle: "وقتشه ببینی اون بیرون چه چیزهایی منتظر توئه."
  },

  { 
    image:"static/images/paris3.jpg",
    title: "مقصدتو پیدا کن",
    subTitle: "جستجو کن، انتخاب کن، سفر کن." 
  },

  {
   image:"static/images/paris4.jpg" ,
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
    monthInput.value = button.dataset.month;
    monthModal.classList.remove("active");
  });
  
  
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".hero-field")) {
    monthModal.classList.remove("active");
  }
});


// Special tours

// const specialTours= [
//   {
//     image: "static/images/antalya.jpg",
//     title: "تور ترکیه، آنتالیا",
//     duration: "4 روز و 3 شب",
//     stars: 4,
//     price: "100"
//   },
//   {
//     image: "static/images/bankok.jpg",
//     title: "تور تایلند، بانکوک",
//     duration: "7 روز و 6 شب",
//     stars: 4,
//     price: "200"
//   },
//   {
//     image: "static/images/dubai.jpg",
//     title: "تور امارات، دوبی",
//     duration: "7 روز و 6 شب",
//     stars: 3,
//     price: "300"
//   },
//   {
//     image: "static/images/istanbul.jpg",
//     title: "تور ترکیه، استانبول",
//     duration: "5 روز و 4 شب",
//     hotel: "هتل 6 ستاره",
//     stars: 4,
//     price: "400"
//   },
//   {
//     image: "static/images/paris.jpg",
//     title: "تور فرانسه، پاریس",
//     duration: "9 روز و 8 شب",
//     stars: 5,
//     price: "500"
//   },
//   {
//     image: "static/images/venice.jpg",
//     title: "تور ایتالیا، ونیز",
//     duration: "7 روز و 6 شب",
//     stars: 5,
//     price: "600"
//   },
// ];
////////////////////////////////////////////////////////

function formatTourDate(startDate, endDate) {
  return `
    <div class="date-item">
      <ion-icon name="airplane-outline"></ion-icon>
      <span>رفت: ${startDate}</span>
    </div>

    <div class="date-item">
      <ion-icon name="return-down-back-outline"></ion-icon>
      <span>برگشت: ${endDate}</span>
    </div>
  `;
}

function generateStars(stars) {
  let starsHTML = ``;

  for (let i=1; i<=5; i++) {
    if (i<=stars) {
      starsHTML += `<span class="star filled">
      <ion-icon name="star"></ion-icon>
      </span>`;
    }
    else {
      starsHTML += `<span class="star empty">
      <ion-icon name="star-outline"></ion-icon>
      </span>`;
    }
  }

  return starsHTML;
}

const toursGrid = document.querySelector(".tours-grid");

async function loadTours() {
    const response = await fetch('/api/tours/');
    const tours = await response.json();
    renderTours(tours);
}




function renderTours(tours) {
  toursGrid.innerHTML = ``;

  tours.forEach((tour) => {

    const card = document.createElement("div");
    card.classList.add("tour-card");

    card.innerHTML= `
    <div class="tour-card-image">
        <img src="${tour.cover}" alt="${tour.title}">
    </div>

    <div class="tour-card-content">
      <h3>${tour.title}</h3>

      <div class="tour-card-meta">
        <div class="tour-card-dates">
          ${formatTourDate(tour.startDate, tour.endDate)}
        </div>
        <div class="tour-duration"> ${tour.duration} روز </div>
        
      </div>
      
      <div class="tour-card-footer">
        <div class="tour-card-star-price">
          <div class="tour-card-stars"> ${generateStars(tour.stars)}</div>
          <div class="tour-card-price"> قیمت: ${tour.price}€</div>
        </div>
      
        <button class="card-book-btn btn">رزرو</button>
      </div>
    </div>
    `;

    toursGrid.appendChild(card);



  });

}

loadTours();


// renderTours();