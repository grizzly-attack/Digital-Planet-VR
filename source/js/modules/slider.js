  // 'use strict';
  // (function () {
  //   var slideIndex = 1;
  //   var prevButton = document.querySelector(".slider__button--back");
  //   var nextButton = document.querySelector(".slider__button--next");

  //   prevButton.addEventListener("click", minusSlide);
  //   nextButton.addEventListener("click", plusSlide);
  //   showSlides(slideIndex);

  //   function plusSlide() {
  //       showSlides(slideIndex += 1);
  //   }

  //   function minusSlide() {
  //       showSlides(slideIndex -= 1);
  //   }

  //   function showSlides(n) {
  //       var i;
  //       var slides = document.querySelectorAll(".slider__item");
  //       if (n > slides.length) {
  //         slideIndex = 1
  //       }
  //       if (n < 1) {
  //           slideIndex = slides.length
  //       }
  //       for (i = 0; i < slides.length; i++) {
  //           slides[i].classList.add("slider__item--locked");
  //           if (slides[i].classList.contains("slider__item--active")) {
  //             slides[i].classList.remove("slider__item--active")
  //           }
  //       }

  //       if (slides[slideIndex - 1].classList.contains("slider__item--locked")) {
  //         slides[slideIndex - 1].classList.remove("slider__item--locked");
  //         slides[slideIndex - 1].classList.add("slider__item--active");
  //       }
  //   }

  // })
  // ();

