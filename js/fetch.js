const getDataUrl = 'https://23.javascript.pages.academy/keksobooking/data';
const sendDataUrl = 'https://23.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onError) => (
  fetch(getDataUrl)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      else {
        throw new Error (`Ошибка ${response.status}, не удалось получить данные с сервера...`);}
      // по идее надо взять и заблокировать карту и форму
    })
    .then((response) => response.json())
    .then((offers) => onSuccess(offers))
    .catch((error) => onError(error))
);

const sendData = (form, onSuccess, onError) => (
  fetch(sendDataUrl,
    {
      method: 'POST',
      body: new FormData(form),
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      throw new Error (`Ошибка ${response.status}, не удалось отправить данные ...`);
    }
  })
    .catch((error) => onError(error))
);

export {getData, sendData};
