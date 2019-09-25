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

      var accordeon = document.querySelectorAll('.questions__button');

      for (var i = 0; i < accordeon.length; i++) {
        accordeon[i].addEventListener("click", function() {
        theclicked=event.target;
        theclicked.classList.toggle("questions__button--close");
        var answers = document.querySelectorAll('.questions__answer'),
        buttons = Array.prototype.slice.call( document.getElementsByClassName('questions__button') );
        answers[( buttons.indexOf( theclicked.parentElement ) )].classList.toggle("questions__answer--open");
      },
      false);
    }

    var openButton = document.querySelector('.page-header__button');
    var openButtonIntro = document.querySelector('.intro__button-order');
    var popup = document.querySelector('.popup');
    var close = popup.querySelector('.popup__close-button');
    var overlay = popup.querySelector('.popup__wrapper');

    var userName = popup.querySelector('[name="user-name"]');
    var phone = popup.querySelector('[name="user-phone"]');

    var body = document.querySelector('body');

    var form = popup.querySelector('form');

    openButtonIntro.addEventListener('click', function(evt) {
      evt.preventDefault();
      popup.classList.add('popup__send');
      body.classList.add('popup-modal');
      userName.focus();
    });

    openButton.addEventListener('click', function(evt) {
      evt.preventDefault();
      popup.classList.add('popup__send');
      body.classList.add('popup-modal');
      userName.focus();
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("popup__send");
      body.classList.remove('popup-modal');
    });

    form.addEventListener("submit", function () {
      localStorage.setItem("name", name.value);
      localStorage.setItem("phone", phone.value);
    });

    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup__send")) {
        popup.classList.remove("popup__send");
        body.classList.remove("popup-modal");
        }
      };
    });

    overlay.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("popup__send");
      popup.classList.remove("popup__message");
      body.classList.remove('popup-modal');
    })

    var openButtonContacts = document.querySelector('.contacts__form-button');

