'use strict';

(function () {
  var navToggle = document.querySelector('.page-header__toggle');
  var header = document.querySelector('.page-header');
  var body = document.body;

  if (!navToggle || !header) {
    return;
  }

  header.classList.remove('page-header--nojs');
  navToggle.addEventListener('click', function() {
    header.classList.toggle('page-header--open');
    body.classList.toggle('popup-modal');
  });
})();
