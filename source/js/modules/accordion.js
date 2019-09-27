  'use strict';
  (function () {
    var item = document.getElementsByClassName('questions__item');

    for (var i = 0; i < item.length; i++) {
      item[i].addEventListener('click', function(el) {

        el.currentTarget.classList.toggle('questions__item--open');

        for (var j = 0; j < item.length; j++) {
          if (item[j] !== el.currentTarget && item[j].className === "item questions__item--open") {
            item[j].classList.remove('questions__item--open');
          }
        }
      });
    };
  })
  ();

