'use strict';

(function () {
  var navToggle = document.querySelector('.page-header__toggle');
  var header = document.querySelector('.page-header');

  if (!navToggle || !header) {
    return;
  }

  header.classList.remove('page-header--nojs');
  navToggle.addEventListener('click', function() {
  header.classList.toggle('page-header--open');

    if (header.classList.contains('page-header--open')) {
      bodyScrollLock.disableBodyScroll();
    } else {
      bodyScrollLock.enableBodyScroll();
    }
  });
})();
