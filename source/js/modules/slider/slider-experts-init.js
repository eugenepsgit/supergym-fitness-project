import Swiper from '../../vendor/swiper';

let sliderExperts;
const prevButton = document.querySelector('.experts__button--prev');
const nextButton = document.querySelector('.experts__button--next');

const sliderExpertsInit = () => {
  sliderExperts = new Swiper('.experts__slider-wrapper', {
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
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 2,
        initialSlide: 2,
        spaceBetween: 32,
        allowTouchMove: true,
      },
      0: {
        slidesPerView: 1,
        initialSlide: 2,
        spaceBetween: 40,
        allowTouchMove: true,
      },
    },
  });
};

export {sliderExpertsInit, sliderExperts};
