const getDataUrl = 'https://23.javascript.pages.academy/keksobooking/data';
const sendDataUrl = 'https://23.javascript.pages.academy/keksobooking';

// модуль получения данных c сервера
const getData = () => (
  fetch(getDataUrl)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error (`Ошибка ${response.status}, не удалось получить данные с сервера...`);
    })
    .then((response) => response.json())
    // .then((posts) => console.log(posts))
    // .catch((error) => console.log(error))
);

const sendData = (form) => (
  fetch(sendDataUrl,
    {
      method: 'POST',
      body: new FormData(form),
    },
  ).then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error (`Ошибка ${response.status}, не удалось отправить данные ...`);
  })
);

export {getData, sendData};

// далее разлиновка данных
