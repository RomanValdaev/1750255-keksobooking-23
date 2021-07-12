import {sendData} from './fetch.js';
import {openSuccessModal, openErrorModal} from './popup.js';
import {setInitAddress, setInitMainPin} from './map.js';

const formSend = document.querySelector('.ad-form');
const buttonReset = formSend.querySelector('.ad-form__reset');

const setInitStateForm = () => {
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
