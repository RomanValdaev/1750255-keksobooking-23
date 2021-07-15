import './form-booking.js';
import './form-send.js';
import {OFFERS_VALUE} from './variables.js';
import {formValidation} from './form-validation.js';
import {deactiveMap} from './switch-map.js';
import {initMap, addMainPinIcon, addOtherPinMarker} from './map.js';
import {getData} from './fetch.js';
import {errorMessage} from './error-message.js';
import {finalFilter} from './filter-form-map.js';
import {debounce} from './utils/debounce.js';

const TIME__DELAY = 500; // надо ли ее вынести в variables.js ? По идее она используется только в данном блоке.
const filterFormMap = document.querySelector('.map__filters');
let offersDataFinal = []; // надо ли ее вынести в variables.js ? По идее она используется только в данном блоке.

formValidation();
deactiveMap();
initMap();
addMainPinIcon();

const onChangeFilter = () => {
  const offersFilter = finalFilter(offersDataFinal).slice();
  addOtherPinMarker(offersFilter);
};

const random = (array) => {
  offersDataFinal = array.slice();
  addOtherPinMarker(array.slice(0, OFFERS_VALUE));
  filterFormMap.addEventListener('change', debounce(onChangeFilter, TIME__DELAY));
};

getData(random, errorMessage);
