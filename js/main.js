// Cоздаем точку входа
import {createOffer} from './create-offer.js'; // импортировал функцию из модуля

const NUMBER_OF_ARRAYS = 1; // создал константу в блоке, где она используется

// создаем случайный массив данных
const similarOffers = new Array(NUMBER_OF_ARRAYS).fill(null).map(() => createOffer());
similarOffers;
console.log(similarOffers);

// временно экспортируем переменную для написания блока
export{similarOffers};
