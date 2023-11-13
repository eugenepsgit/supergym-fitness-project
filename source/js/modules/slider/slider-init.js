import Swiper from '../../vendor/swiper';

let slider;
const prevButton = document.querySelector('.experts__button--prev');
const nextButton = document.querySelector('.experts__button--next');

const sliderInit = () => {
  slider = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    allowSlideNext: true,
    allowSlidePrev: true,
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },
    containerModifierClass: 'experts__',
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};

export {sliderInit, slider};
