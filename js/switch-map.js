const formNotice = document.querySelector('.ad-form');
const formMapFiltres = document.querySelector('.map__filters');

const deactiveMap = () => {
  formNotice.classList.add('ad-form--disabled');
  formMapFiltres.classList.add('map__filters--disabled');
};

const activeMap = () => {
  formNotice.classList.remove('ad-form--disabled');
  formMapFiltres.classList.remove('map__filters--disabled');
};

export {deactiveMap, activeMap};
