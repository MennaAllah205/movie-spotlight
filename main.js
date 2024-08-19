let header= document.querySelector('header');

window.addEventListener('scroll',()=>{
  header.classList.toggle('shadow', window.scrollY>0);
});

var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Initialize Swiper for the Coming Soon section
var swiper = new Swiper('.coming-container', { 
  // Space between slides
  spaceBetween: 20,
  
  // Enable continuous loop mode
  loop: true,
  
  // Autoplay settings
  autoplay: {
    delay: 5500, // Set delay to 5500 milliseconds (5.5 seconds)
    disableOnInteraction: false, // Continue autoplay even after user interaction
  },
  centeredSlides:true,



  
  breakpoints: {

    0:{
      slidesPerView:2,
    },
    568: {
      slidesPerView: 3, // Show 1 slide per view
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 4, // Show 2 slides per view
    },
    // When window width is >= 1024px
    968: {
      slidesPerView: 5, // Show 3 slides per view
    },
  },
});
