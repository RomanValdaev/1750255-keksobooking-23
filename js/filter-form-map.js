//импортируем функции
import {getData} from './fetch.js'; // подаем данные с сревера
import {debounce} from './utils/debounce.js';
import {createMarker} from './map.js'; // импортируем функцию по созданию "вторичных" точек

// создаем константы по фильтру
const filterFormMap = document.querySelector('.map__filters');
const housingType = filterFormMap.querySelector('#housing-type');
const housingPrice = filterFormMap.querySelector('#housing-price');
const housingRooms = filterFormMap.querySelector('#housing-rooms');
const housingGuests = filterFormMap.querySelector('#housing-guests');
const housingFeatures = filterFormMap.querySelector('#housing-features');
const filterWifi = housingFeatures.document.querySelector('#filter-wifi');
const filterDishwasher = housingFeatures.document.querySelector('#filter-dishwasher');
const filterParking = housingFeatures.document.querySelector('#filter-parking');
const filterWasher = housingFeatures.document.querySelector('#filter-washer');
const filterElevator = housingFeatures.document.querySelector('#filter-elevator');
const filterConditioner = housingFeatures.document.querySelector('#filter-conditioner');

const OFFERS_VALUE = 10; // размер итоговой выдачи после фильтрации
const TIME__DELAY = 500; // задержка обновления

// вводим контстанты для определения границ фильтрации
const ANY = 'any'; // "любой, значение по умолчанию при загрузке сайта"

const FILTER_VALUE_DEFAULT = {
  type: ANY,
  price: ANY,
  rooms: ANY,
  guests: ANY,
};

const PRICE = {
  LOW: 'low',
  MIDDLE: 'middle',
  HIGH: 'high',
  MIN_COST:'10000',
  MAX_COST:'50000',
};

const FEATRUES = {
  WIFI: 'wifi',
  DISHWASHER: 'dishwasher',
  PARKING: 'parking',
  WASHER: 'washer',
  ELEVATOR: 'elevator',
  CONDITIONER: 'conditioner',
};

// Пишем отдельные функции для общего фильтра
// ====================================================

// function for house-type, rooms, guests
const filterMatch = (filterValue, dataField) => {
  filterValue === ANY || String(filterValue) === String(dataField);
};

// function for price
const priceMatch = (filterValue, dataField) => {
  filterValue === ANY ||
  (filterValue === PRICE.LOW && dataField < PRICE.MIN_COST) ||
  (filterValue === PRICE.MIDDLE && dataField >= PRICE.MIN_COST && dataField < PRICE.MAX_COST) ||
  (filterValue === PRICE.HIGH && dataField >= PRICE.MAX_COST);
};

// function for select current input (checkbox)
const selectFeatures = (checkbox, filterValue, dataField) => {
  checkbox.checked === false ||
  (dataField && dataField.find((value) => value === filterValue));
};

// фильтруем полученный массив данных. Проект функции...

const finalFilter = () => {  // требуется доработка функции
  markerGroup.clearLayers();   // очищаем существующий массив фильтров
  // подаем даннные с сервера (весь обьем)
  // проводим фильтрацию на соотвествие выбраным фильтрам
  getData((filteredData) => {
    filteredData = filteredData.filter((item) => {
      filterMatch(FILTER_VALUE_DEFAULT.type, item.offer.type) &&
          priceMatch(FILTER_VALUE_DEFAULT.price, item.offer.price) &&
          filterMatch(FILTER_VALUE_DEFAULT.rooms, item.offer.rooms) &&
          filterMatch(FILTER_VALUE_DEFAULT.guests, item.offer.guests) &&
          selectFeatures(filterWifi,item.offer.features, FEATRUES.WIFI) &&
          selectFeatures(filterDishwasher,item.offer.features, FEATRUES.DISHWASHER) &&
          selectFeatures(filterParking,item.offer.features, FEATRUES.PARKING) &&
          selectFeatures(filterWasher,item.offer.features, FEATRUES.WASHER) &&
          selectFeatures(filterElevator,item.offer.features, FEATRUES.ELEVATOR) &&
          selectFeatures(filterConditioner,item.offer.features, FEATRUES.CONDITIONER);
    });
  });
  // получаем отфильтрованный массив данных.
  // проводим его обрезку до кол-ва 10.
  createMarker(filteredData.slice(0, OFFERS_VALUE));
};

// ========================================================
const reloadFilters = debounce(finalFilter, TIME__DELAY); // убираем дребезг при "reload" фильтров.
//=====================================================

// обработчики на "клик" по полям фильтра. если есть клик то перезагружаем фильтр
housingType.addEventListener('change', (evt) => {
  FILTER_VALUE_DEFAULT.type = evt.target.value;
  reloadFilters();
});

housingPrice.addEventListener('change', (evt) => {
  FILTER_VALUE_DEFAULT.type = evt.target.value;
  reloadFilters();
});

housingRooms.addEventListener('change', (evt) => {
  FILTER_VALUE_DEFAULT.type = evt.target.value;
  reloadFilters();
});

housingGuests.addEventListener('change', (evt) => {
  FILTER_VALUE_DEFAULT.type = evt.target.value;
  reloadFilters();
});

filterWifi.addEventListener('click', () => {
  reloadFilters();
});

filterDishwasher.addEventListener('click', () => {
  reloadFilters();
});

filterParking.addEventListener('click', () => {
  reloadFilters();
});

filterWasher.addEventListener('click', () => {
  reloadFilters();
});

filterElevator.addEventListener('click', () => {
  reloadFilters();
});

filterConditioner.addEventListener('click', () => {
  reloadFilters();
});

export {finalFilter};
// полученные данные должны податься на функцию генерации вторичных точек
// ТЗ . При изменении фильтра скрывать открытый балун с объявлением.
