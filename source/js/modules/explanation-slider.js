  'use strict';
  (function () {
    var slideIndex = 1;
      var prevButton = document.querySelector(".explanation__slider-button--back");
      var nextButton = document.querySelector(".explanation__slider-button--next");

      prevButton.addEventListener("click", minusSlide);
      nextButton.addEventListener("click", plusSlide);
      showSlides(slideIndex);

      function plusSlide() {
          showSlides(slideIndex += 1);
      }

      function minusSlide() {
          showSlides(slideIndex -= 1);
      }

      function showSlides(n) {
          var i;
          var slides = document.querySelectorAll(".explanation__item");
          if (n > slides.length) {
            slideIndex = 1
          }
          if (n < 1) {
              slideIndex = slides.length
          }
          for (i = 0; i < slides.length; i++) {
              slides[i].classList.add("explanation__item--lock");
              if (slides[i].classList.contains("explanation__item--active")) {
                slides[i].classList.remove("explanation__item--active")
              }
          }

          if (slides[slideIndex - 1].classList.contains("explanation__item--lock")) {
            slides[slideIndex - 1].classList.remove("explanation__item--lock");
            slides[slideIndex - 1].classList.add("explanation__item--active");
          }
      }
  })
  ();

