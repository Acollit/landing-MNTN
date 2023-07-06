import SmoothScroll from 'smooth-scroll';

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});




window.addEventListener('scroll', function () {
  var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Определение условий и применение стилей
  if (currentPosition > 100) {
    document.getElementById('item').classList.add('slider__item--active');
    document.getElementById('item-1').classList.remove('slider__item--active');
    document.getElementById('item-2').classList.remove('slider__item--active');
    document.getElementById('item-3').classList.remove('slider__item--active');
  } if (currentPosition > 900) {
    document.getElementById('item').classList.remove('slider__item--active');
    document.getElementById('item-2').classList.remove('slider__item--active');
    document.getElementById('item-3').classList.remove('slider__item--active');
    document.getElementById('item-1').classList.add('slider__item--active');

  } if (currentPosition > 1500) {
    document.getElementById('item-3').classList.remove('slider__item--active');
    document.getElementById('item-1').classList.remove('slider__item--active');
    document.getElementById('item-2').classList.add('slider__item--active');

  } if (currentPosition > 2400) {
    document.getElementById('item-2').classList.remove('slider__item--active');
    document.getElementById('item-1').classList.remove('slider__item--active');
    document.getElementById('item-3').classList.add('slider__item--active');
  }
});
