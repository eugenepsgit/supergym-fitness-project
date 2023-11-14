import Swiper from '../../vendor/swiper';

let sliderReviews;
const prevButton = document.querySelector('.reviews__button--prev');
const nextButton = document.querySelector('.reviews__button--next');

const sliderReviewsInit = () => {
  sliderReviews = new Swiper('.reviews__slider-wrapper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 800,
    centeredSlides: true,
    allowSlideNext: true,
    allowSlidePrev: true,
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },
    containerModifierClass: 'reviews__',
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
};

export {sliderReviewsInit, sliderReviews};