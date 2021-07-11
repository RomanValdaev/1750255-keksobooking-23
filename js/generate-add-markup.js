import {getData} from './fetch.js';

const houseTypeData = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const cardTemplateСontent = document.querySelector('#card').content; // получаем полный состав template (#card)
const mapCanvasElement = document.querySelector('#map-canvas'); // получаем полный состав template (#map-canvas)
const similarFragment = document.createDocumentFragment(); // создаем пустую оболочку для дальнейшей записи данных

const generateAddMarkup = function({offer, author}) {
  // начинаем перебор сформированного массива
  const ticket = cardTemplateСontent.cloneNode(true); // клонируем массив с данными
  if (offer.title.length < 2) {
    ticket.querySelector('.popup__title').classList.add('hidden'); // проверка на достаточность данных
  } else {
    ticket.querySelector('.popup__title').textContent = offer.title; // вывод данных в обьект DOM
  }
  if (offer.address.length < 2) {
    ticket.querySelector('.popup__text--address').classList.add('hidden'); // проверка на достаточность данных
  } else {
    ticket.querySelector('.popup__text--address').textContent = offer.address; // вывод данных в обьект DOM
  }
  if (offer.price.length < 2) {
    ticket.querySelector('.popup__text--price').classList.add('hidden'); // проверка на достаточность данных
  } else {
    ticket.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`; // вывод данных в обьект DOM
  }

  ticket.querySelector('.popup__type').textContent = houseTypeData[offer.type]; // запись
  ticket.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат(ы) для ${offer.guests} гостей`; // запись
  ticket.querySelector ('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`; //запись

  const listAccessOptions = ticket.querySelector('.popup__features'); // находим общий список
  listAccessOptions.innerHTML = ''; // обнуляем содержимое списка, делаем список пустым
  const featuresData = offer.features; // создаем переменную и записываем в нее данные из массива

  if (featuresData.length === 0) {
    ticket.querySelector('.popup__feature').classList('hidden');
  } else {
    for (let featureData = 0;  featureData < featuresData.length; featureData++) {
      const listFeatureItem = document.createElement('li');  // создаем элемент списка
      listFeatureItem.classList.add('popup__feature');   // присваиваем элементу списка первый класс
      listFeatureItem.classList.add(`popup__feature--${featuresData[featureData].toLowerCase()}`); // присваиваем элементу списка второй класс
      listAccessOptions.appendChild(listFeatureItem); //перемещаем элемент в последний уровень списка
    }
  }
  const fotoElement = ticket.querySelector('.popup__photos');
  fotoElement.innerHTML = ''; // обнуляем содержимое списка, делаем список пустым
  const fotoElementData = offer.photos;

  if (fotoElementData.length === 0) {
    fotoElement.classList.add('hidden');
  } else {
    for (let fotoElementItem = 0; fotoElementItem < fotoElementData.length; fotoElementItem++) {
      const fotoElementImg  = document.createElement('img'); //добавляем новый элемент
      fotoElementImg.classList.add('popup__photo');
      fotoElementImg.src = `${fotoElementData[fotoElementItem]}`;
      fotoElementImg.width = 45;
      fotoElementImg.height = 40;
      fotoElementImg.alt = 'Фотография апартаментов';
      fotoElement.appendChild(fotoElementImg);
    }
  }

  const avatarItem = ticket.querySelector('.popup__avatar');
  const avatarSrc = author.avatar;
  if (avatarSrc.lenght === 0) {
    avatarItem.classList.add('hidden');
  } else {
    avatarItem.src = avatarSrc;
  }

  return ticket;
};

export {generateAddMarkup};
