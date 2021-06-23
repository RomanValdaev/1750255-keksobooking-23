// Собираем все индивидуальныке модули в блок формирования рандомных данных
import {
  USER_NUMBER_MIN,
  USER_NUMBER_MAX,
  PRICE_VALUE_MIN,
  PRICE_VALUE_MAX,
  TYPE_OF_APARTMENT,
  ROOMS_VALUE_MIN,
  ROOMS_VALUE_MAX,
  GUEST_VALUE_MIN,
  GUEST_VALUE_MAX,
  CHECK_IN_TIME,
  CHECK_OUT_TIME,
  HOTEL_FEATURES,
  REAL_ESTATE_PHOTO,
  LONGITUDE_VALUE_MIN,
  LONGITUDE_VALUE_MAX,
  LATITUDE_VALUE_MIN,
  LATITUDE_VALUE_MAX,
  COORDS_ACCURACY } from './variables.js';

import {getRandomInt} from './get-random-int.js';
import {getArrayRandomElement} from './get-array-random-element.js';
import {getRandomFloatInt} from './get-random-float-int.js';

// 4. Формируем структуру обьекта согласно ТЗ:
function createOffer() {
  const longitudeMiddleValue = getRandomFloatInt(LONGITUDE_VALUE_MIN, LONGITUDE_VALUE_MAX, COORDS_ACCURACY);
  const latitudeMiddleValue = getRandomFloatInt(LATITUDE_VALUE_MIN, LATITUDE_VALUE_MAX, COORDS_ACCURACY);
  return {
    author: {
      avatar: `img/avatars/user0${getRandomInt(USER_NUMBER_MIN, USER_NUMBER_MAX)}.png`},

    offer: {
      title: 'Сдам уютную квартиру, недорого',
      address: `Координаты места расположения: ${longitudeMiddleValue}, ${latitudeMiddleValue}`,
      price: getRandomInt(PRICE_VALUE_MIN, PRICE_VALUE_MAX),
      type: getArrayRandomElement(TYPE_OF_APARTMENT),
      rooms: getRandomInt(ROOMS_VALUE_MIN, ROOMS_VALUE_MAX),
      guests: getRandomInt(GUEST_VALUE_MIN, GUEST_VALUE_MAX),
      checkin: getArrayRandomElement(CHECK_IN_TIME),
      checkout: getArrayRandomElement(CHECK_OUT_TIME),
      features: HOTEL_FEATURES.slice(0, getRandomInt(1, HOTEL_FEATURES.length)),
      description: 'Мебелированная квартира в веницианском стиле. Машина времени в комплекте', // потом сделать массив из 3 - 5 значений.
      photos: REAL_ESTATE_PHOTO.slice(0, getRandomInt(1, REAL_ESTATE_PHOTO.length))  },

    location: {
      lat: longitudeMiddleValue,
      lng: latitudeMiddleValue,
    },
  };
}

export {createOffer};
