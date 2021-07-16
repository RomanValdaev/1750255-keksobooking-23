import {sendData} from './fetch.js';
import {openSuccessModal, openErrorModal} from './popup.js';
import {setInitAddress, setInitMainPin} from './map.js';

const formSend = document.querySelector('.ad-form');
const buttonReset = formSend.querySelector('.ad-form__reset');
const mapFiltres = document.querySelector('.map__filters');

const setInitStateForm = () => {
  mapFiltres.reset();
  mapFiltres.dispatchEvent(new Event('change'));
  formSend.reset();
  setInitMainPin();
  setInitAddress();
};

buttonReset.addEventListener('click', setInitStateForm);

const onSuccess = () => {
  setInitStateForm();
  openSuccessModal();
};

formSend.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(evt.target, onSuccess, openErrorModal);
} );
