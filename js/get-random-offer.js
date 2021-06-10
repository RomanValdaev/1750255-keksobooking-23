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
  COORDS_ACCURACY,
  NUMBER_OF_ARRAYS} from './variables.js';

import {getRandomIntInclusive} from './get-random-positive-integer.js';
import {getArrayRandomElement} from './get-random-stroke-massive.js';
import {getFloatInt} from './get-random-positive-float.js';

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

const similarOffers = new Array(NUMBER_OF_ARRAYS).fill(null).map(() => createOffer());
similarOffers;

export {similarOffers};
