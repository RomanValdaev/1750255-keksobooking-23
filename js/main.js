// Cоздаем точку входа
import {createOffer} from './create-offer.js';
import {generateAddMarkup} from './generate-add-markup.js';
import {formValidation} from './form-validation.js';
import './form-booking.js';

const NUMBER_OF_ARRAYS = 1;
const similarOffers = new Array(NUMBER_OF_ARRAYS).fill(null).map(() => createOffer());
generateAddMarkup(similarOffers[0]);
formValidation();
