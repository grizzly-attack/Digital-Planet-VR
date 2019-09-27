'use strict';
(function () {
  var sendButton = document.querySelector('.contacts__form-button');
      var popupMessage = document.querySelector('.popup__message');
      var okButton = document.querySelector('.popup__button');
      var messageOverlay = document.querySelector('.popup__wrapper')
      var body = document.querySelector('body');
      var closeButton = document.querySelector('.popup__close-button--send');

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
     });
}) ();
