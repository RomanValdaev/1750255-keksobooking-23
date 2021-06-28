function switchMap () {

  const formNotice = document.querySelector('.ad-form');   // находим блок формы обьявления
  const inputForm = formNotice.document.querySelector('input'); // находим интерактивные элементы формы
  const formMapFiltres = document.querySelector('.map__filters'); // находим форму
  const formSelect = formMapFiltres.document.querySelector('.map__filter'); // находим в форме selest
  const formCheckbox = formMapFiltres.querySelector('.map__checkbox'); // находим чекбокс

  // если карту нужно деактивировать, то выполняется следующая функция
  function deactiveMap () {
    formNotice.classList.add('ad-form--disabled'); // добавляем форме класс деактивации
    inputForm.setAttribute('disabled','disabled'); // деактивируем интерактивные элементы формы
    formMapFiltres.classList.add('ad-form--disabled'); // добавляем на нее класс деактивации
    formSelect.setAttribute('disabled','disabled'); // деактивируем select
    formCheckbox.setAttribute('disabled','disabled'); // деактивируем чекбокс
  }
  deactiveMap();

  function activeMap () {
    formNotice.classList.remove('ad-form--disabled'); // добавляем форме класс деактивации
    inputForm.removeAttribute('disabled','disabled'); // деактивируем интерактивные элементы формы
    formMapFiltres.classList.remove('ad-form--disabled'); // добавляем на нее класс деактивации
    formSelect.removeAttribute('disabled','disabled'); // деактивируем select
    formCheckbox.removeAttribute('disabled','disabled'); // деактивируем чекбокс
  }
  activeMap();


  // предполагемый функционал - кнопка, которая включает и выключает режим карты
  document.addEventListener('click', activeMap);
  document.addEventListener('click', deactiveMap);
}

switchMap();
export{switchMap};
