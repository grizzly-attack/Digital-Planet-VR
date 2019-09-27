'use strict';

(function () {
  var navToggle = document.querySelector('.page-header__toggle');
  var header = document.querySelector('.page-header');
  header.classList.remove('page-header--nojs');
  navToggle.addEventListener('click', function() {
  if (header.classList.contains('page-header--close')) {
    header.classList.remove('page-header--close');
    header.classList.add('page-header--open');
    } else {
    header.classList.add('page-header--close');
    header.classList.remove('page-header--open');
    }
  });
})
();

