const formNotice = document.querySelector('.ad-form');
const formMapFiltres = document.querySelector('.map__filters');

// если карту нужно деактивировать, то выполняется следующая функция
function deactiveMap () {
  formNotice.classList.add('ad-form--disabled');
  formMapFiltres.classList.add('map__filters--disabled');
}

function activeMap () {
  formNotice.classList.remove('ad-form--disabled');
  formMapFiltres.classList.remove('map__filters--disabled');
}
activeMap();

// предполагемый функционал - кнопка, которая включает и выключает режим карты
document.addEventListener('click', activeMap);
document.addEventListener('click', deactiveMap);

export{deactiveMap};
export{activeMap};
