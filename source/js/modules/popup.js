'use strict';
(function () {
    var openButton = document.querySelector('.page-header__button');

    var popupSend = document.querySelector('.popup__send');
    var close = popupSend.querySelector('.popup__close-button--order');
    var sendOverlay = popupSend.querySelector('.popup__wrapper');

    var userName = popupSend.querySelector('[name="user-name"]');
    var phone = popupSend.querySelector('[name="user-phone"]');

    var body = document.querySelector('body');

    var form = popupSend.querySelector('form');

    function modalOpen(evt) {
      evt.preventDefault();
      popupSend.classList.add('popup--show');
      body.classList.add('popup-modal');
      userName.focus();
    }

      openButton.addEventListener('click', modalOpen)

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
    });

    var orderButton = document.querySelector(".intro__button-order");

    orderButton.addEventListener('click', modalOpen)
    })
    ();
