  'use strict';
  (function () {
      var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: number => number < 9 ? ('0' + (number)) : (number + 1),
        formatFractionTotal: number => number < 9 ? ('0' + (number)) : (number)
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });

  })
  ();
