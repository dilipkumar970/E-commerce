var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
        },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".arrivals-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
  });