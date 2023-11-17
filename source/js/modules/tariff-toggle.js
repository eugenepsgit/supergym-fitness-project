let btnIndex = 0;
const controlBtns = document.querySelectorAll('.tariff__control');
const shownPrice = document.querySelectorAll('.tariff-plan__price');
const priceShadows = document.querySelectorAll('.tariff-plan__price-shadow');
const prices = [
  [5000, 1700, 2700],
  [30000, 10200, 16200],
  [60000, 20400, 32400]
];

controlBtns.forEach((button, i) => {
  button.addEventListener('click', () => {
    btnIndex = i;
    changePeriod(btnIndex);
  });
});

const changePeriod = () => {
  controlBtns[0].classList.add('tariff__control--active');

  shownPrice.forEach((price, index) => {
    price.textContent = prices[btnIndex][index];

    if (index === btnIndex) {
      controlBtns[index].classList.add('tariff__control--active');
    } else {
      controlBtns[index].classList.remove('tariff__control--active');
    }
  });

  priceShadows.forEach((price, index) => {
    price.textContent = prices[btnIndex][index];
  });
};

export {changePeriod};
