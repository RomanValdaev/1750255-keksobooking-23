import './form-booking.js';
import './form-send.js';
import {formValidation} from './form-validation.js';
import {deactiveMap} from './switch-map.js';
import {initMap, addMainPinIcon, addOtherPinMarker} from './map.js';
import {getData} from './fetch.js';
import {errorMessage} from './error-message.js';

formValidation();
deactiveMap();
initMap();
addMainPinIcon();
getData(addOtherPinMarker, errorMessage);
