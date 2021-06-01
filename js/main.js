// Задание №1.
// Функция, возвращающая случайное целое число из переданного диапазона включительно....

function getRandomIntInclusive(min, max) {
  if (min >= 0 && max >= 0 && max > min) {
    min = Math.ceil(min); // округление вверх. Округляет аргумент до ближайшего большего целого.
    max = Math.floor(max); // округление вниз. Округляет аргумент до ближайшего меньшего целого.
    integer = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются.
    console.log(integer);
  } else if(min < 0 || max < 0){
    console.log('В диапазоне должны использоваться только положительные числа!');
  } else if(max <= min){
    console.log('В диапазоне максимальное значение должно быть больше минимального!');
  }
}
getRandomIntInclusive(0, 10);

// Задание №2.
// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно....

function getFloatInt(min, max) {
  if (min >= 0 && max >= 0 && max > min) {
    floatInt = Math.random() * (max - min) + min;
    console.log(floatInt.toFixed(2));
  } else if (min < 0 || max < 0) {
    console.log('В диапазоне должны использоваться только положительные числа!');
  } else if (max <= min) {
    console.log('В диапазоне максимальное значение должно быть больше минимального!');
  }
}

getFloatInt(0, 12);


// Используемые источники информации:
// https://learn.javascript.ru
// https://developer.mozilla.org
// https://habr.com/ru
