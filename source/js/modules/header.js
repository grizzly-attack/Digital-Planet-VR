'use strict';

(function () {
  var navToggle = document.querySelector('.page-header__toggle');
  var header = document.querySelector('.page-header');
  var main = document.querySelector('.page-main');

  if (!navToggle || !header) {
    return;
  }

  header.classList.remove('page-header--nojs');
  navToggle.addEventListener('click', function () {
    header.classList.toggle('page-header--open');
    main.classList.toggle('page-main--open');

    if (header.classList.contains('page-header--open')) {
      window.bodyScrollLock.disableBodyScroll();
    } else {
      window.bodyScrollLock.enableBodyScroll();
    }
  });
})();
