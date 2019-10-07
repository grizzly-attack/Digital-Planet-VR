'use strict';
(function () {
  var swiper;
  var swiperElement = document.querySelector('.swiper-container');

  if (!swiperElement) {
    return;
  }

  var createSlider = function () {
    swiper = new window.Swiper('.swiper-container', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
          return number < 9 ? ('0' + (number)) : (number + 1);
        },
        formatFractionTotal: function (number) {
          return number < 9 ? ('0' + (number)) : (number);
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  };

  var initSliderMobile = function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (!swiper || swiper.destroyed) {
        createSlider();
      }
    } else if (swiper) {
      swiper.destroy(true, true);
    }
  };

  var initSliderTablet = function () {
    if (window.matchMedia('(max-width: 1023px)').matches) {
      if (!swiper || swiper.destroyed) {
        createSlider();
      }
    } else if (swiper) {
      swiper.destroy(true, true);
    }
  };

  if (swiperElement.classList.contains('js-slider-mobile')) {
    initSliderMobile();
    window.addEventListener('resize', initSliderMobile);
  } else if (swiperElement.classList.contains('js-slider-tablet')) {
    initSliderTablet();
    window.addEventListener('resize', initSliderTablet);
  } else {
    createSlider();
  }
})();
