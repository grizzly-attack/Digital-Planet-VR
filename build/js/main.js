  'use strict';

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

    var openButton = document.querySelector('.page-header__button');

    var popupSend = document.querySelector('.popup__send');
    var close = popupSend.querySelector('.popup__close-button--order');
    var sendOverlay = popupSend.querySelector('.popup__wrapper');

    var sendButton = document.querySelector('.contacts__form-button');
    var closeButton = document.querySelector('.popup__close-button--send');
    var popupMessage = document.querySelector('.popup__message');
    var okButton = document.querySelector('.popup__button');
    var messageOverlay = document.querySelector('.popup__wrapper')

    var userName = popupSend.querySelector('[name="user-name"]');
    var phone = popupSend.querySelector('[name="user-phone"]');

    var body = document.querySelector('body');

    var form = popupSend.querySelector('form');

      openButton.addEventListener('click', function(evt) {
      evt.preventDefault();
      popupSend.classList.add('popup--show');
      body.classList.add('popup-modal');
      userName.focus();
    });

      close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupSend.classList.remove("popup--show");
      body.classList.remove('popup-modal');
    });

    form.addEventListener("submit", function () {
      localStorage.setItem("name", name.value);
      localStorage.setItem("phone", phone.value);
    });

    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupSend.classList.contains("popup--show")) {
        popupSend.classList.remove("popup--show");
        popupSend.classList.remove("popup-modal");
        }

      if (popupSend.classList.contains("popup--show")) {
        popupMessage.classList.remove("popup--show");
        popupMessage.classList.remove("popup-modal");
        }
      };
    });

    sendOverlay.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupSend.classList.remove("popup--show");
      body.classList.remove('popup-modal');
    })

    sendButton.addEventListener('click', function() {
      popupMessage.classList.add('popup--show');
      body.classList.add('popup-modal');
    });

    closeButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupMessage.classList.remove("popup--show");
      body.classList.remove('popup-modal');
    });

    okButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupMessage.classList.remove("popup--show");
      body.classList.remove('popup-modal');
    });

    messageOverlay.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupSend.classList.remove("popup--show");
        body.classList.remove('popup-modal');
     })
