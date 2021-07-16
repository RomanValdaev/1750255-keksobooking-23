import './form-booking.js';
import './form-send.js';
import {getFormValidation} from './get-form-validation.js';
import {deactiveMap, activeMapFilters} from './switch-map.js';
import {initMap, addMainPinIcon, addOtherPinMarker} from './map.js';
import {getData} from './fetch.js';
import {getErrorMessage} from './error-message.js';
import {getFinalFilter} from './filter-form-map.js';
import {debounce} from './utils/debounce.js';

const TIME__DELAY = 500;
const OFFERS_VALUE = 10;
let offersDataFinal = [];

const filterFormMap = document.querySelector('.map__filters');

getFormValidation();
deactiveMap();
initMap();
addMainPinIcon();

const onChangeFilter = () => {
  const offersFilter = getFinalFilter(offersDataFinal).slice();
  addOtherPinMarker(offersFilter);
};

const getSortedOffers = (array) => {
  activeMapFilters();
  offersDataFinal = array.slice();
  addOtherPinMarker(array.slice(0, OFFERS_VALUE));
  filterFormMap.addEventListener('change', debounce(onChangeFilter, TIME__DELAY));
};

getData(getSortedOffers, getErrorMessage);
