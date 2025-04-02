const navLinks =document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton =document.querySelector("#menu-open-button");
const menuCloseButton =document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});


menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });
  
  document.querySelectorAll(".simple-bar-chart .label").forEach(label => {
    label.addEventListener("mouseenter", () => {
        document.querySelectorAll(".simple-bar-chart .item").forEach(item => {
            item.style.animation = "none";
            void item.offsetWidth; // Forces reflow to restart animation
            item.style.animation = "item-height 2s ease forwards";
        });
    });
});
