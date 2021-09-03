"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); // swiper  //course

var swiper = new Swiper(".courseSwiper", {
  slidesPerView: 2,
  spaceBetween: 15,
  grid: {
    fill: 'row',
    rows: 2
  },
  breakpoints: {
    768: {
      spaceBetween: 30
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 1.5,
      grid: {
        fill: 'row',
        rows: 1
      }
    }
  }
}); // swiper  //comment

var swiper = new Swiper(".commentSwiper", {
  slidesPerView: 1,
  spaceBetween: 8,
  grid: {
    fill: 'row',
    rows: 3
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 2
      }
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 2
      }
    }
  }
}); // swiper  //level

var swiper = new Swiper(".levelSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  grid: {
    fill: 'row',
    rows: 3
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 1
      }
    },
    992: {
      slidesPerView: 2.3,
      spaceBetween: 24,
      grid: {
        fill: 'row',
        rows: 1
      }
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
      grid: {
        fill: 'row',
        rows: 1
      }
    }
  }
}); // swiper  //teachers

var swiper = new Swiper(".teachersSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  grid: {
    fill: 'row',
    rows: 4
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 1
      }
    },
    1200: {
      slidesPerView: 3.2,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 1
      }
    }
  }
}); // swiper  //recommend

var swiper = new Swiper(".recommendSwiper", {
  slidesPerView: 1.3,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
}); // datepicker

var elem = document.querySelector('input[name="dateSelect"]');
var datepicker = new Datepicker(elem, {
  nextArrow: '>',
  prevArrow: '<',
  buttonClass: 'btn link-primary',
  autohide: true
});
//# sourceMappingURL=all.js.map
