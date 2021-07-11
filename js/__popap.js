const successAlert = document.querySelector('.success'); //successAlert
const errorAlert = document.querySelector('.error'); // errorAlert
const errorButton = errorAlert.querySelector('.error__button'); // errorButton

//====================================================================
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const isEnterEvent = (evt) => evt.key === 'Enter';
const showAlert = (modal) => {
  const alertContainer = modal.cloneNode(true);
  document.body.append(alertContainer);
};

//====================================================================

const onSuccessPopupEscKeydown = (evt) => {
  if (isEscEvent(evt) || evt.currentTarget === document) {
    evt.preventDefault();
    successAlert.classList.add('hidden');
    document.removeEventListener('keydown', onSuccessPopupEscKeydown);
    document.removeEventListener('click', onSuccessPopupEscKeydown);
  }
};
const onErrorPopupEscKeydown = (evt) => {
  if (isEscEvent(evt) || evt.currentTarget === document) {
    evt.preventDefault();
    errorAlert.classList.add('hidden');
    document.removeEventListener('keydown', onErrorPopupEscKeydown);
    document.removeEventListener('click', onErrorPopupEscKeydown);
  }
};
const openSuccessModal = () => {
  successAlert.classList.remove('hidden');
  document.addEventListener('keydown', onSuccessPopupEscKeydown);
  document.addEventListener('click', onSuccessPopupEscKeydown);
};
const openErrorModal = () => {
  errorAlert.classList.remove('hidden');
  document.addEventListener('keydown', onErrorPopupEscKeydown);
  document.addEventListener('click', onErrorPopupEscKeydown);
};
const closeErrorModal = () => {
  errorAlert.classList.add('hidden');
  document.removeEventListener('keydown', onErrorPopupEscKeydown);
  document.removeEventListener('click', onErrorPopupEscKeydown);
};
errorButton.addEventListener('click', () => {
  closeErrorModal();
});
errorButton.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    closeErrorModal();
  }
});
export {openSuccessModal, openErrorModal, successAlert, errorAlert, isEscEvent, isEnterEvent, showAlert};
