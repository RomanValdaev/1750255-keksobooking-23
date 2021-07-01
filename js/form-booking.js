// Синхронизируем время заезда и выезда в полях «Тип жилья» и «Время заезда-выезда».

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const formTimeChange = () => {
  function timeIntСhange() {
    timeIn.value = timeOut.value;
  }

  function timeOutСhange() {
    timeOut.value = timeIn.value;
  }

  timeIn.addEventListener('change', timeOutСhange);
  timeOut.addEventListener('change', timeIntСhange);
};

// Синхронизируем действия в полях 'Тип Жилья' и 'Цена за ночь'
const formHouseChange = () => {
  const BUNGALO_MIN_COST = 0;
  const FLAT_MIN_COST = 1000;
  const HOTEL_MIN_COST = 3000;
  const HOUSE_MIN_COST = 5000;
  const PALACE_MIN_COST = 10000;

  const addForm = document.querySelector('.ad-form');
  const houseType = addForm.querySelector('#type');
  const houseCurrentPrice = addForm.querySelector('#price');

  houseType.addEventListener('change', () => {
    switch (houseType.value) {
      case 'bungalow':
        houseCurrentPrice.setAttribute('min', BUNGALO_MIN_COST);
        houseCurrentPrice.setAttribute('placeholder', BUNGALO_MIN_COST);
        break;
      case 'flat':
        houseCurrentPrice.setAttribute('min', FLAT_MIN_COST);
        houseCurrentPrice.setAttribute('placeholder', FLAT_MIN_COST);
        break;
      case 'hotel':
        houseCurrentPrice.setAttribute('min', HOTEL_MIN_COST);
        houseCurrentPrice.setAttribute('placeholder', HOTEL_MIN_COST);
        break;
      case 'house':
        houseCurrentPrice.setAttribute('min', HOUSE_MIN_COST);
        houseCurrentPrice.setAttribute('placeholder', HOUSE_MIN_COST);
        break;
      case 'palace':
        houseCurrentPrice.setAttribute('min', PALACE_MIN_COST);
        houseCurrentPrice.setAttribute('placeholder', PALACE_MIN_COST);
        break;
    }
  });
};

export {formTimeChange};
export {formHouseChange};
