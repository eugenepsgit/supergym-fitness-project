const isMobile = window.matchMedia('(max-width:1365px)');
const expertCards = document.querySelectorAll('.experts__card');

const setCardsActive = () => {
  expertCards.forEach((card) => {
    card.setAttribute('tabindex', '0');
  });
  if (isMobile.matches) {
    for (let card of expertCards) {
      card.addEventListener('click', function () {
        if (this.classList.contains('experts__card--active')) {
          return;
        }
        expertCards.forEach((i) => i.classList.remove('experts__card--active'));

        this.classList.add('experts__card--active');

        document.body.addEventListener('click', function documentClickHandler(event) {
          if (!event.target.closest('.experts__card')) {
            card.classList.remove('experts__card--active');
            document.body.removeEventListener('click', window.documentClickHandler);
          }
        });
      });
    }
  }
};

export {setCardsActive};
