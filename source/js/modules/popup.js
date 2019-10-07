'use strict';
(function () {
  function popupOpenedClosed (popup, button, field) {
    var close = popup.querySelector('.popup__close-button');
    var overlay = popup.querySelector('.popup__wrapper');

    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      popupOpen(popup);

      if (field) {
        field.focus();
      }
    });

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

  function popupOpen(popup) {
    popup.classList.add('popup--show');
    bodyScrollLock.disableBodyScroll();
  }

  function popupClose(popup) {
    popup.classList.remove('popup--show');
    bodyScrollLock.enableBodyScroll();
  }

  function popupOrderActivate() {
    var openButton = document.querySelector('.page-header__button');
    var popupSend = document.querySelector('.popup__send');
    var userName = popupSend.querySelector('[name="user-name"]');

    if (!popupSend) {
      return;
    }

    var phone = popupSend.querySelector('[name="user-phone"]');
    var form = popupSend.querySelector('form');

    popupOpenedClosed(popupSend, openButton, userName);
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
    });;
  }

  function popupMessageActivate() {
    var sendButton = document.querySelector('.contacts__form-button');
    if (!sendButton) {
      return;
    }

    var popupMessage = document.querySelector('.popup__message');
    var okButton = popupMessage.querySelector('.popup__button');

    popupOpenedClosed(popupMessage, sendButton);

    okButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      popupClose(popupMessage);
    });
  }
  popupOrderActivate();
  popupMessageActivate();
})();
