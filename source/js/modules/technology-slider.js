  'use strict';
  (function () {
    var slideIndex = 1;
    var prevButton = document.querySelector(".technology__slider-button--back");
    var nextButton = document.querySelector(".technology__slider-button--next");

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
        var slides = document.querySelectorAll(".technology__item");
        if (n > slides.length) {
          slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add("technology__item--lock");
            if (slides[i].classList.contains("technology__item--active")) {
              slides[i].classList.remove("technology__item--active")
            }
        }

        if (slides[slideIndex - 1].classList.contains("technology__item--lock")) {
          slides[slideIndex - 1].classList.remove("technology__item--lock");
          slides[slideIndex - 1].classList.add("technology__item--active");
        }
    }
  })
  ();

