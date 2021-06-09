// ==================================================================================
// Решение задачи
// ==================================================================================

// Описываем необходимые переменные:
const USER_NUMBER_MIN = 1;
const USER_NUMBER_MAX = 8;
const PRICE_VALUE_MIN = 1;
const PRICE_VALUE_MAX = 50;
const TYPE_OF_APARTMENT = ['Palace', 'Flat', 'House', 'Bungalow', 'Hotel'];
const ROOMS_VALUE_MIN = 1;
const ROOMS_VALUE_MAX = 5;
const GUEST_VALUE_MIN = 1;
const GUEST_VALUE_MAX = 10;
const CHECK_IN_TIME = ['12:00', '13:00', '14:00'];
const CHECK_OUT_TIME = ['12:00', '13:00', '14:00'];
const HOTEL_FEATURES = ['Wifi', 'Dishwasher', 'Parking', 'Washer', 'Elevator', 'Conditioner'];
const REAL_ESTATE_PHOTO = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const LONGITUDE_VALUE_MIN = 35.65000;
const LONGITUDE_VALUE_MAX = 35.70000;
const LATITUDE_VALUE_MIN = 139.70000;
const LATITUDE_VALUE_MAX = 139.80000;
const COORDS_ACCURACY = 5;
const NUMBER_OF_ARRAYS = 10;

// Описываем типовые функции, что бы потом их использовать при вычислениях.

// 1. Типовая функция - вычисляем случайное целое число.
function getRandomIntInclusive(min, max) {
  if (min >= 0 && max >= 0 && max > min) {
    min = Math.ceil(min); // округление вверх. Округляет аргумент до ближайшего большего целого.
    max = Math.floor(max); // округление вниз. Округляет аргумент до ближайшего меньшего целого.
    const integer = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются.
    return integer;
  } else if (min < 0 || max < 0) {
    //Выводим сообщение об обшибке - ('В диапазоне должны использоваться только положительные числа!');
  } else if (max <= min) {
    //Выводим сообщение об обшибке - ('В диапазоне максимальное значение должно быть больше минимального!');
  }
}

// 2. Типовая функция. Перебор массива с текстовыми данными c выводом случайного значения по индексу элемента.
function getArrayRandomElement (array) {
  if (array && array.length) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

// 3. Типовая функция. Вычисляем случайное целое число с плавающей запятой.
function getFloatInt(min, max) {
  if (min >= 0 && max >= 0 && max > min) {
    const floatInt = Math.random() * (max - min) + min;
    const floatIntNumber = Number(floatInt.toFixed(COORDS_ACCURACY));//приводим полученное строковое значение к типу Number.
    return floatIntNumber; // получаем результат работы функции в виде числа.
  } else if (min < 0 || max < 0) {
    //Выводим сообщение об обшибке - ('В диапазоне должны использоваться только положительные числа!');
  } else if (max <= min) {
    //Выводим сообщение об обшибке - ('В диапазоне максимальное значение должно быть больше минимального!');
  }
}

// 4. Формируем структуру обьекта согласно ТЗ:
function createOffer() {
  const longitudeMiddleValue = getFloatInt(LONGITUDE_VALUE_MIN, LONGITUDE_VALUE_MAX, COORDS_ACCURACY);
  const latitudeMiddleValue = getFloatInt(LATITUDE_VALUE_MIN, LATITUDE_VALUE_MAX, COORDS_ACCURACY);
  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntInclusive(USER_NUMBER_MIN, USER_NUMBER_MAX)}.png`},

    offer: {
      title: 'Сдам уютную квартиру, недорого',
      address: `Координаты места расположения: ${longitudeMiddleValue}, ${latitudeMiddleValue}`,
      price: getRandomIntInclusive(PRICE_VALUE_MIN, PRICE_VALUE_MAX),
      type: getArrayRandomElement(TYPE_OF_APARTMENT),
      rooms: getRandomIntInclusive(ROOMS_VALUE_MIN, ROOMS_VALUE_MAX),
      guests: getRandomIntInclusive(GUEST_VALUE_MIN, GUEST_VALUE_MAX),
      checkin: getArrayRandomElement(CHECK_IN_TIME),
      checkout: getArrayRandomElement(CHECK_OUT_TIME),
      features: HOTEL_FEATURES.slice(0, getRandomIntInclusive(1, HOTEL_FEATURES.length)),
      description: 'Мебелированная квартира в веницианском стиле. Машина времени в комплекте', // потом сделать массив из 3 - 5 значений.
      photos: REAL_ESTATE_PHOTO.slice(0, getRandomIntInclusive(1, REAL_ESTATE_PHOTO.length))  },

    location: {
      lat: longitudeMiddleValue,
      lng: latitudeMiddleValue,
    },
  };
}
// 5. Формируем необходимый массив из 10 JS обьектов:
const similarOffers = new Array(NUMBER_OF_ARRAYS).fill(null).map(() => createOffer());
similarOffers;
// console.log(similarOffers);
