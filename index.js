var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[manual].classList.add('active');

}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

var repeat = function (activeClass) {
  let active = document.querySelectorAll('.slide.active');
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      active.forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

      slides[i].classList.add('active');
      i++

      if (i >= slides.length) {
        i = 0;
      }
      repeater();
    }, 4000);
  }
  repeater();
}
repeat();
