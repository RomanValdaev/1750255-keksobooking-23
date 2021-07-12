
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const BUNGALO_MIN_COST = 0;
const FLAT_MIN_COST = 1000;
const HOTEL_MIN_COST = 3000;
const HOUSE_MIN_COST = 5000;
const PALACE_MIN_COST = 10000;

// Синхронизируем время заезда и выезда в полях «Тип жилья» и «Время заезда-выезда».

timeIn.addEventListener('change', () => {timeOut.value = timeIn.value;});
timeOut.addEventListener('change', () => {timeIn.value = timeOut.value;});

// Синхронизируем действия в полях 'Тип Жилья' и 'Цена за ночь'
const formHouseChange = () => {
  const addForm = document.querySelector('.ad-form');
  const houseType = addForm.querySelector('#type');
  const houseCurrentPrice = addForm.querySelector('#price');

  houseType.addEventListener('change', () => {
    switch (houseType.value) {
      case 'bungalow':
        houseCurrentPrice.min = BUNGALO_MIN_COST;
        houseCurrentPrice.placeholder = BUNGALO_MIN_COST;
        break;
      case 'flat':
        houseCurrentPrice.min = FLAT_MIN_COST;
        houseCurrentPrice.placeholder = FLAT_MIN_COST;
        break;
      case 'hotel':
        houseCurrentPrice.min = HOTEL_MIN_COST;
        houseCurrentPrice.placeholder = HOTEL_MIN_COST;
        break;
      case 'house':
        houseCurrentPrice.min = HOUSE_MIN_COST;
        houseCurrentPrice.placeholder = HOUSE_MIN_COST;
        break;
      case 'palace':
        houseCurrentPrice.min = PALACE_MIN_COST;
        houseCurrentPrice.placeholder = PALACE_MIN_COST;
        break;
    }
  });
};

formHouseChange();
