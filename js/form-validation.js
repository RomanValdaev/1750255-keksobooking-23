// Валидация "Заголовок обьявления"

const MIN_TITLE_VALUE = 30;
const MAX_TITLE_VALUE = 100;

const formValidation = function () {
  const textTitle = document.querySelector('#title');
  textTitle.addEventListener('input', () => {
    const valueLength = textTitle.value.length;

    if (valueLength < MIN_TITLE_VALUE) {
      textTitle.setCustomValidity(`Нужно добавить еще ${MIN_TITLE_VALUE - valueLength} симв.`);
    } else if (valueLength > MAX_TITLE_VALUE) {
      textTitle.setCustomValidity(`Краткость - сестра таланта! Удалите лишние ${valueLength - MAX_TITLE_VALUE} симв.`);
    } else {
      textTitle.setCustomValidity('');
    }
    textTitle.reportValidity();
  });

  // Валидация поля "Цена за ночь"
  const MIN_NIGHT_PRICE = 1;
  const MAX_NIGHT_PRICE = 1000000;

  const priceValue = document.querySelector('#price');
  priceValue.addEventListener('input', () => {
    if (priceValue.value < MIN_NIGHT_PRICE) {
      priceValue.setCustomValidity('Как бы нам этого не хотелось, стоимость не может быть отрицательной');
      priceValue.style.backgroundColor = '#ffdee6';
    } else if (priceValue.value >= MAX_NIGHT_PRICE) {
      priceValue.setCustomValidity('Больше 1млн за ночь? мы не можем себе этого позволить!');
      priceValue.style.backgroundColor = '#ffdee6';
    } else {
      priceValue.setCustomValidity('');
      priceValue.style.backgroundColor = 'white';
    }
    priceValue.reportValidity();
  });

  // Валидация Кол-во комнат и кол-во мест
  const form = document.querySelector('.ad-form');
  const roomsSelect = form.querySelector('#room_number');
  const guestsSelect = form.querySelector('#capacity');
  const ROOMS = {
    one: 1,
    two: 2,
    three: 3,
    hundred: 100,
  };
  const GUEST = {
    one: 1,
    two: 2,
    three: 3,
    norooms: 'не для гостей',
  };

  const roomGuestValidate = () => {
    const roomsOfNumbers = roomsSelect.value;
    const guestOfNumbers = guestsSelect.value;
    let message ='';

    if (roomsOfNumbers === ROOMS.one && guestOfNumbers === GUEST.one) {
      message = 'Подтверждаем заселение ОДНОГО гостя';
    } else if (roomsOfNumbers === ROOMS.one && guestOfNumbers !== GUEST.one) {
      message = 'Этот номер может разместить одного гостя';
    } else if (roomsOfNumbers === ROOMS.two && guestOfNumbers === GUEST.one && guestOfNumbers === GUEST.two) {
      message = 'Этот номер может разместить одного или двух гостей';
    } else if (roomsOfNumbers === ROOMS.three && guestOfNumbers === GUEST.one || guestOfNumbers === GUEST.two || guestOfNumbers === GUEST.three ) {
      message = 'Этот номер может разместить до 3 гостей';
    } else if (roomsOfNumbers === ROOMS.hundred) {
      message = 'Этот 100-комнатный дворец не для гостей';
    }
    roomsSelect.setCustomValidity(message);
    guestsSelect.setCustomValidity(message);
  };

  form.addEventListener('change', roomGuestValidate);
};

export {formValidation};
