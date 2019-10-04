'use strict';
(function () {
  var items = document.querySelectorAll('.questions__item');
  var currentItem = document.querySelector('.questions__item--open');

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(el) {
      if (currentItem) {
        currentItem.classList.remove('questions__item--open');
      }

      if (currentItem !== el.currentTarget) {
        currentItem = el.currentTarget;
        currentItem.classList.toggle('questions__item--open');
      } else {
        currentItem = null;
      }
    });
  };
})();
