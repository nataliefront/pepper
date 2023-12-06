const menu = document.querySelector('.header__toggle');
const container = document.querySelector('.header__container');
const header = document.querySelector('.header');

if (menu) {
  const menuLinks = document.querySelector('.header__list');
  const body = document.querySelector('body');
  menu.addEventListener("click", function(e) {
    menu.classList.toggle('is-active')
    container.classList.toggle('is-active')
    header.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
    document.body.classList.toggle('_lock')
  })
}


// Submenu
let menuArrows = document.querySelectorAll('.header__arrow');

if (menuArrows.length > 0) {
  for (let index = 0; index < menuArrows.length; index++) {
    const menuArrow = menuArrows[index];
    menuArrow.addEventListener("click", function (e) {
      menuArrow.parentElement.classList.toggle('_active');
    });
  }
}


// Digital scroll counter
function digitsCountersInit(digitsCountersItems) {
  let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
  if (digitsCounters) {
    digitsCounters.forEach(digitsCounter => {
      digitsCountersAnimate(digitsCounter);
    });
  }
}

function digitsCountersAnimate(digitsCounter) {
  let startTimestamp = null;
  const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1500;
  const startValue = parseInt(digitsCounter.innerHTML);
  const startPosition = 0;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp =timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

let options = {
  threshold: 0.8
}
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetElement = entry.target;
      const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
      if (digitsCountersItems.length) {
        digitsCountersInit(digitsCountersItems);
      }
      observer.unobserve(targetElement);
    }
  });
}, options);

let sections = document.querySelectorAll('.section__page');
if (sections.length) {
  sections.forEach(section => {
    observer.observe(section);
  })
}



// Swiper Decoration
var decorationSwiper = new Swiper(".decoration__swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination-decoration",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-decoration",
    prevEl: ".swiper-button-prev-decoration",
  },
});

var decorationImageSwiper = new Swiper(".decoration-image__swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 500,
});

decorationSwiper.controller.control = decorationImageSwiper;
decorationImageSwiper.controller.control = decorationSwiper;



// Swiper Our Projects
var bottleSwiper = new Swiper(".our-projects__swiper-bottle", {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  simulateTouch: false,
  navigation: {
    nextEl: ".swiper-button-next-our-projects-bottle",
    prevEl: ".swiper-button-prev-our-projects-bottle",
  },
});

var bottleListSwiper = new Swiper(".our-projects__swiper-bottle-list", {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next-our-projects",
    prevEl: ".swiper-button-prev-our-projects",
  },
});

bottleSwiper.controller.control = bottleListSwiper;
bottleListSwiper.controller.control = bottleSwiper;