import {similarOffers} from './main.js';
// console.log(similarOffers);

// Создаем временный объект с данными
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

const generateAdMarkup = function() {
  // начинаем перебор сформированного массива
  for (let i = 0; i <= similarOffers.length - 1; i++) {
    const ticket = cardTemplateСontent.cloneNode(true); // клонируем массив с данными
    // Работаем с Title
    if (similarOffers[i].offer.title.length < 2) {
      ticket.querySelector('.popup__title').classList.add('hidden'); // проверка на достаточность данных
    } else {
      ticket.querySelector('.popup__title').textContent = similarOffers[i].offer.title; // вывод данных в обьект DOM
    }
    // Работаем с Address
    if (similarOffers[i].offer.address.length < 2) {
      ticket.querySelector('.popup__text--address').classList.add('hidden'); // проверка на достаточность данных
    } else {
      ticket.querySelector('.popup__text--address').textContent = similarOffers[i].offer.address; // вывод данных в обьект DOM
    }
    // Работаем с Price
    if (similarOffers[i].offer.price.length < 2) {
      ticket.querySelector('.popup__text--price').classList.add('hidden'); // проверка на достаточность данных
    } else {
      ticket.querySelector('.popup__text--price').textContent = `${similarOffers[i].offer.price} ₽/ночь`; // вывод данных в обьект DOM
    }

    ticket.querySelector('.popup__type').textContent = houseTypeData[similarOffers[i].offer.type]; // запись
    ticket.querySelector('.popup__text--capacity').textContent = `${similarOffers[i].offer.rooms} комнат(ы) для ${similarOffers[i].offer.guests} гостей`; // запись
    ticket.querySelector ('.popup__text--time').textContent = `Заезд после ${similarOffers[i].offer.checkin}, выезд до ${similarOffers[i].offer.checkout}`; //запись

    // Работаем с Features
    const listAccessOptions = document.querySelectorAll('.popup__features'); // находим общий список
    listAccessOptions.innerHTML = ''; // обнуляем содержимое списка, делаем список пустым
    const featuresData = similarOffers[i].offer.features; // создаем переменную и записываем в нее данные из массива
    // console.log(featuresData);

    // проверяем данные на наличие, если данных нет то массив скрывается
    if (featuresData.length === 0) {
      ticket.querySelector('.popup__feature').classList('hidden');
    } else {
    // описываем цикл переборки массива
      for (let featureData = 0;  featureData < featuresData; featureData++) {
        const listFeatureItem = document.createElement('li');  // создаем элемент списка
        listFeatureItem.classList.add('popup__feature'); // присваиваем элементу списка первый класс
        listFeatureItem.classList.add(`popup__feature--${featuresData}`); // присваиваем элементу списка второй класс
        listAccessOptions.appendChild(listFeatureItem); //перемещаем элемент в последний уровень списка
      }
    }
    // Работаем с Photo
    const fotoElement = ticket.querySelector('.popup__photos');
    fotoElement.querySelector('img').remove(); // удаляем ненужный Img.
    const fotoElementData = similarOffers[i].offer.photos;

    if (fotoElementData.length === 0) {
      fotoElement.classList.add('hidden');
    } else {
      for (let fotoElemenItem = 0; fotoElemenItem < fotoElementData; fotoElemenItem++) {
        const fotoElementImg = document.createElement('img');
        // может тут надо сделать ссылку на создание элемента в fotoElement.createElement('img')?
        fotoElementImg.classList.add('popup__photo');
        fotoElementImg.src = `${fotoElementData}`;
        fotoElementImg.width = 45;
        fotoElementImg.height = 40;
        fotoElementImg.alt = 'Фотография жилья';
        fotoElement.appendChild(fotoElementImg);
      }
    }
    // Работаем с Avatar
    const avatarItem = ticket.querySelector('.popup__avatar');
    const avatarSrc = similarOffers[i].author.avatar;
    if (avatarSrc.lenght === 0) {
      avatarItem.classList.add('hidden');
    } else {
      avatarItem.src = avatarSrc;
    }

    similarFragment.appendChild(ticket);
    if (i === 0) {
      mapCanvasElement.appendChild(similarFragment);
    }
  }
};
generateAdMarkup();
// console.log(generateAdMarkup());
