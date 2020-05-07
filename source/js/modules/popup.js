'use strict';
(function () {
  function initPopup(popup, form) {
    var close = popup.querySelector('.popup__close-button');
    var overlay = popup.querySelector('.popup__wrapper');

    close.addEventListener('click', function (evt) {
      evt.preventDefault();
      form.reset();
      popupClose(popup);
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains('popup--show')) {
          form.reset();
          popupClose(popup);
        }
      }
    });

    overlay.addEventListener('click', function (evt) {
      evt.preventDefault();
      form.reset();
      popupClose(popup);
    });
  }

  function popupOpen(popup, form) {
    popup.classList.add('popup--show');
    window.bodyScrollLock.disableBodyScroll(form);
  }

  function popupClose(popup, form) {
    popup.classList.remove('popup--show');
    window.bodyScrollLock.enableBodyScroll(form);
  }

  function initOrderPopup() {
    var openButton = document.querySelector('.page-header__button');
    var popupSend = document.querySelector('.popup--send');

    if (!popupSend) {
      return;
    }

    var userName = popupSend.querySelector('[name="user-name"]');
    var phone = popupSend.querySelector('[name="user-phone"]');
    var form = popupSend.querySelector('form');

    openButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      popupOpen(popupSend);
      userName.focus();
    });

    initPopup(popupSend, form);
    form.addEventListener('submit', function () {
      localStorage.setItem('name', name.value);
      localStorage.setItem('phone', phone.value);
    });

    var orderButton = document.querySelector('.intro__button-order');

    if (!orderButton) {
      return;
    }

    orderButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      popupOpen(popupSend);
      userName.focus();
    });
  }

  function initMessagePopup() {
    var contactsForm = document.querySelector('.contacts__column-right form');
    if (!contactsForm) {
      return;
    }

    var popupMessage = document.querySelector('.popup--message');
    var okButton = popupMessage.querySelector('.popup__button');

    contactsForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      popupOpen(popupMessage);
    });

    initPopup(popupMessage, contactsForm);

    okButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      contactsForm.reset();
      popupClose(popupMessage);
    });
  }
  initOrderPopup();
  initMessagePopup();
})();
