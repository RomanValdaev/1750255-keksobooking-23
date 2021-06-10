// Cоздаем точку входа
const NUMBER_OF_ARRAYS = 10; // создал константу в блоке, где она используется

import {createOffer} from './get-random-offer.js'; // импортировал функцию из модуля

// выполняем операции в данном модуле
const similarOffers = new Array(NUMBER_OF_ARRAYS).fill(null).map(() => createOffer());
similarOffers;
// console.log(similarOffers);
// линтер (проблемы в консоли)- проблем 0, npm test - ошибок 0;
