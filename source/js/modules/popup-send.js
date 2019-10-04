'use strict';
(function () {
  var sendButton = document.querySelector('.contacts__form-button');
  var popupMessage = document.querySelector('.popup__message');
  var okButton = document.querySelector('.popup__button');
  var messageOverlay = document.querySelector('.popup__wrapper');
  var closeButton = document.querySelector('.popup__close-button--send');

  if (!sendButton) {
    return;
  }

  sendButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMessage.classList.add('popup--show');
    bodyScrollLock.disableBodyScroll();
  });

  closeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMessage.classList.remove('popup--show');
    bodyScrollLock.enableBodyScroll();
  });

  okButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMessage.classList.remove('popup--show');
    bodyScrollLock.enableBodyScroll();
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupMessage.classList.contains('popup--show')) {
        popupMessage.classList.remove('popup--show');
        bodyScrollLock.enableBodyScroll();
      }
    };
  });

  messageOverlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMessage.classList.remove('popup--show');
    bodyScrollLock.enableBodyScroll();
  });
})();
