// перелиновка
import {createOffer} from './create-offer.js';
import {formValidation} from './form-validation.js';
import {generateAddMarkup} from './generate-add-markup.js';
import './form-booking.js';
import './map.js';

const NUMBER_OF_ARRAYS = 10;
const similarOffers = new Array(NUMBER_OF_ARRAYS).fill(null).map(() => createOffer());
generateAddMarkup(similarOffers[0]);
formValidation();
