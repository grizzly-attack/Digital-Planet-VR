  'use strict';

      var navToggle = document.querySelector('.page-header__toggle');
      var header = document.querySelector('.page-header');
      /*navMain.classList.remove('main-nav--js-locked');
      headerContainer.classList.remove('page-header--js-locked');*/
      navToggle.addEventListener('click', function() {
        if (header.classList.contains('page-header--close')) {
          header.classList.remove('page-header--close');
          header.classList.add('page-header--open');
        } else {
          header.classList.add('page-header--close');
          header.classList.remove('page-header--open');
        }
      });


  /*var toggle = document.querySelector('.page-footer__toggle');
  var footerBlock = document.querySelector('.page-footer__block');
  var body = document.querySelector('body');

  var openButton = document.querySelector('.page-header__button');
  var popup = document.querySelector('.popup');
  var close = popup.querySelector('.popup__close-button');
  var overlay = popup.querySelector('.popup__wrapper');

  var form = popup.querySelector('.popup__form');
  var userName = popup.querySelector('[name="user-name"]');
  var phone = popup.querySelector('[name="user-phone"]');
  var question = popup.querySelector('[name="user-question"]');

  toggle.classList.remove('page-footer__toggle--js-locked');
  footerBlock.classList.remove('page-footer__block--js-locked');
  toggle.addEventListener('click', function() {
    if (toggle.classList.contains('page-footer__toggle--closed')) {
      toggle.classList.remove('page-footer__toggle--closed');
      toggle.classList.add('page-footer__toggle--opened');
      footerBlock.classList.remove('page-footer__block--hidden');
    }
    else {
      toggle.classList.add('page-footer__toggle--closed');
      toggle.classList.remove('page-footer__toggle--opened');
      footerBlock.classList.add('page-footer__block--hidden');
    }
  });

  openButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('popup--show');
    body.classList.add('popup-modal');
    userName.focus();
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup--show");
    body.classList.remove('popup-modal');
  });

  form.addEventListener("submit", function () {
    localStorage.setItem("name", name.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("question", question.value);
  });

  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup--show")) {
      popup.classList.remove("popup--show");
      body.classList.remove("popup-modal");
      }
    };
  });

  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup--show");
    body.classList.remove('popup-modal');
  })*/
