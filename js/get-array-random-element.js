// 2. Типовая функция. Перебор массива с текстовыми данными c выводом случайного значения по индексу элемента.
function getArrayRandomElement(array) {
  if (array && array.length) {
    return array[Math.floor(Math.random() * array.length)];
  }
}
export {getArrayRandomElement};
