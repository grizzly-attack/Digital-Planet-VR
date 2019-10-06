'use strict';
(function () {
  var openButton = document.querySelector('.page-header__button');
  var popupSend = document.querySelector('.popup__send');

  if (!popupSend) {
    return;
  }

  var userName = popupSend.querySelector('[name="user-name"]');
  var phone = popupSend.querySelector('[name="user-phone"]');
  var form = popupSend.querySelector('form');

  function popupClosed (popup) {
    var close = popup.querySelector('.popup__close-button');
    var overlay = popup.querySelector('.popup__wrapper');

    close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupClose(popup);
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains('popup--show')) {
          popupClose(popup);
        }
      };
    });

    overlay.addEventListener('click', function (evt) {
      evt.preventDefault();
      popupClose(popup);
    });
  }

  popupClosed(popupSend);

  function popupOpen(popup) {
    popup.classList.add('popup--show');
    bodyScrollLock.disableBodyScroll();
  }

  function popupClose(popup) {
    popup.classList.remove('popup--show');
    bodyScrollLock.enableBodyScroll();
  }

  openButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOpen(popupSend);
    userName.focus();
  });

  form.addEventListener('submit', function () {
    localStorage.setItem('name', name.value);
    localStorage.setItem('phone', phone.value);
  });

  function popupMessageActivate() {
    var sendButton = document.querySelector('.contacts__form-button');
    if (!sendButton) {
      return;
    }

    var popupMessage = document.querySelector('.popup__message');
    var okButton = popupMessage.querySelector('.popup__button');

    sendButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      popupOpen(popupMessage);
    });

    okButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      popupClose(popupMessage);
    });
    popupClosed(popupMessage);
  }

  popupMessageActivate();

  var orderButton = document.querySelector('.intro__button-order');

  if (!orderButton) {
    return;
  }

  orderButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOpen(popupSend);
    userName.focus();
  });;
})();
