import {sendData} from './fetch.js';
import {openSuccessModal, openErrorModal} from './popup.js';
import {setInitAddress, setInitMainPin} from './map.js';

const formSend = document.querySelector('.ad-form');
const buttonReset = formSend.querySelector('.ad-form__reset');
const mapFiltres = document.querySelector('.map__filters');

const onInitStateForm = () => {
  mapFiltres.reset();
  mapFiltres.dispatchEvent(new Event('change'));
  formSend.reset();
  setInitMainPin();
  setInitAddress();
};

buttonReset.addEventListener('click', onInitStateForm);

const onSuccess = () => {
  onInitStateForm();
  openSuccessModal();
};

formSend.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(evt.target, onSuccess, openErrorModal);
} );
