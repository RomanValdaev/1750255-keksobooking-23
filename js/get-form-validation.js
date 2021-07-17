const MIN_TITLE_VALUE = 30;
const MAX_TITLE_VALUE = 100;
const MIN_NIGHT_PRICE = 0;
const MAX_NIGHT_PRICE = 1000000;

const roomsValue = {
  one: '1',
  two: '2',
  three: '3',
  hundred: '100',
};

const guestValue = {
  one: '1',
  two: '2',
  three: '3',
  norooms: '0',
};

const form = document.querySelector('.ad-form');
const roomsSelect = form.querySelector('#room_number');
const guestsSelect = form.querySelector('#capacity');

const getFormValidation = () => {
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

  const priceValue = document.querySelector('#price');
  priceValue.addEventListener('input', () => {
    if (priceValue.value < MIN_NIGHT_PRICE) {
      priceValue.setCustomValidity('Как бы нам этого не хотелось, стоимость не может быть отрицательной');
      priceValue.style.backgroundColor = '#ffdee6';
    } else if (priceValue.value >= MAX_NIGHT_PRICE) {
      priceValue.setCustomValidity('Больше 1млн за ночь? Уверены, что можете себе это позволить!');
      priceValue.style.backgroundColor = '#ffdee6';
    } else {
      priceValue.setCustomValidity('');
      priceValue.style.backgroundColor = 'white';
    }
    priceValue.reportValidity();
  });

  const onRoomsChange = () => {
    const roomsOfNumbers = roomsSelect.value;
    const guestOfNumbers = guestsSelect.value;
    let message ='';

    if (roomsOfNumbers === roomsValue.one && guestOfNumbers !== guestValue.one) {
      message = 'Этот номер может разместить одного гостя';
    } else if (roomsOfNumbers === roomsValue.two && guestOfNumbers !== guestValue.one && guestOfNumbers !== guestValue.two) {
      message = 'Этот номер может разместить одного или двух гостей';
    } else if (roomsOfNumbers === roomsValue.three && guestOfNumbers !== guestValue.one && guestOfNumbers !== guestValue.two && guestOfNumbers !== guestValue.three) {
      message = 'Этот номер может разместить до 3 гостей';
    } else if (roomsOfNumbers === roomsValue.hundred && guestOfNumbers !== guestValue.norooms) {
      message = 'Этот 100-комнатный дворец не для гостей';
    } else {
      message = '';
    }
    roomsSelect.setCustomValidity(message);
    roomsSelect.reportValidity();
  };

  roomsSelect.addEventListener('change', onRoomsChange);
  guestsSelect.addEventListener('change', onRoomsChange);
};

export {getFormValidation};
