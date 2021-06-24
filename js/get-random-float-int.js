import {COORDS_ACCURACY} from './variables.js'; // импортировал отдельно данную переменную, так как через get-random-offer.js данная переменная почему-то не подключалась вместе со всеми переменными.

// 3. Типовая функция. Вычисляем случайное целое число с плавающей запятой.
function getRandomFloatInt(min, max) {
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
export {getRandomFloatInt};
