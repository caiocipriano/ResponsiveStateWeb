

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY>=30)header.classList.add('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


var swiperPopular = new Swiper(".popular__container", {
  spaceBetween:32,
  grabCursor:true,
  centeredSlides:true,
  slidesPerView:'auto',
  loop:'auto',
  
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
});