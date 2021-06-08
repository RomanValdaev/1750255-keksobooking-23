// ==================================================================================
// Решение задачи
// ==================================================================================

// Описываем необходимые переменные:
const userNumberMin = 1;
const userNumberMax = 8;
const locationX = 56.4977100;
const locationY = 84.9743700;
const priceValueMin = 1;
const priceValueMax = 50;
const typeOfApartment = ['Palace', 'Flat', 'House', 'Bungalow', 'Hotel'];
const roomsValueMin = 1;
const roomsValueMax = 5;
const guestsValueMin = 1;
const guestsValueMax = 10;
const checkInTime = ['12:00', '13:00', '14:00'];
const checkOutTime = ['12:00', '13:00', '14:00'];
const hotelFeatures = ['Wifi', 'Dishwasher', 'Parking', 'Washer', 'Elevator', 'Conditioner'];
const realEstatePhoto = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const longitudeValueMin = 35.65000;
const longitudeValueMax = 35.70000;
const latitudeValueMin = 139.70000;
const latitudeValueMax = 139.80000;
const numberOfArrays = 10;

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
    const floatIntNumber = Number(floatInt.toFixed(4));//приводим полученное строковое значение к типу Number.
    return floatIntNumber; // получаем результат работы функции в виде числа.
  } else if (min < 0 || max < 0) {
    //Выводим сообщение об обшибке - ('В диапазоне должны использоваться только положительные числа!');
  } else if (max <= min) {
    //Выводим сообщение об обшибке - ('В диапазоне максимальное значение должно быть больше минимального!');
  }
}

// 4. Формируем структуру обьекта согласно ТЗ:
const currentObjectName = {
  author: {
    avatar:'img/avatars/user0' + getRandomIntInclusive(userNumberMin, userNumberMax) + '.png',
  },

  offer: {
    title: 'Сдам уютную квартиру, недорого',
    adress: 'Координаты места расположения: ' + locationX + ', ' + locationY,
    price: getRandomIntInclusive(priceValueMin, priceValueMax),
    type: getArrayRandomElement(typeOfApartment),
    rooms: getRandomIntInclusive(roomsValueMin, roomsValueMax),
    guests: getRandomIntInclusive(guestsValueMin, guestsValueMax),
    checkin: getArrayRandomElement(checkInTime),
    checkout: getArrayRandomElement(checkOutTime),
    features: getArrayRandomElement(hotelFeatures),
    description: 'Мебелированная квартира в веницианском стиле. Машина времени в комплекте', // потом сделать массив из 3 - 5 значений.
    photos: getArrayRandomElement(realEstatePhoto),
  },

  location: {
    lat: getFloatInt(longitudeValueMin, longitudeValueMax),
    lng: getFloatInt(latitudeValueMin, latitudeValueMax),
  },
};

for ( let value = 0; value < numberOfArrays; value++) {
  const newArray = Array.of(currentObjectName);
  // console.log(newArray);
  newArray;
}

