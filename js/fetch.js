const getDataUrl = 'https://23.javascript.pages.academy/keksobooking/data';
const sendDataUrl = 'https://23.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onError) => (
  fetch(getDataUrl)
    .then((response) => (response.ok) ? (response.json()) : () => {throw new Error (`Ошибка ${response.status}, не удалось получить данные с сервера...`);},
    )
    .then((offers) => onSuccess(offers))
    .catch((error) => onError(error))
);

const sendData = (form, onSuccess, onError) => (
  fetch(sendDataUrl,
    {
      method: 'POST',
      body: new FormData(form),
    },
  )
    .then((response) => (response.ok) ? onSuccess() : () => {throw new Error (`Ошибка ${response.status}, не удалось отправить данные ...`);},
    )
    .catch((error) => onError(error))
);

export {getData, sendData};
