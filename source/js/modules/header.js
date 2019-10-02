'use strict';

(function () {
  var navToggle = document.querySelector('.page-header__toggle');
  var header = document.querySelector('.page-header');
  var body = document.querySelector('body');
  header.classList.remove('page-header--nojs');
  navToggle.addEventListener('click', function() {
    if (header.classList.contains('page-header--close')) {
      header.classList.remove('page-header--close');
      header.classList.add('page-header--open');
      body.classList.add('popup-modal');
      } else {
      header.classList.add('page-header--close');
      header.classList.remove('page-header--open');
      body.classList.remove('popup-modal');
    }
  });
})();
