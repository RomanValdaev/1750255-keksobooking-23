import './form-booking.js';
import {createOffer} from './create-offer.js';
import {formValidation} from './form-validation.js';
import {deactiveMap} from './switch-map.js';
import {initMap, addMainPinIcon, addOtherPinMarker} from './map.js';

const NUMBER_OF_ARRAYS = 10;
const similarOffers = new Array(NUMBER_OF_ARRAYS).fill(null).map(() => createOffer());

formValidation();
deactiveMap();
initMap();
addMainPinIcon();
addOtherPinMarker(similarOffers);
