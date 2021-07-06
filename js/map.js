// подключаем необходимые блоки для формирование исходных данных
import {activeMap} from './switch-map.js';
import {getRandomFloatInt} from './get-random-float-int.js';
import {generateAddMarkup} from './generate-add-markup.js';
// import {POINTS} from './points.js'; // подключение архива с данными

// вводим необходимые переменные
const TOKYO_CENTER_LAT = 35.68951;
const TOKYO_CENTER_LNG = 139.69171;

// подключаем карту
const map = L.map('map-leaflet')
  .on('load', () => {
    // console.log('Карта инициализирована');
  })
  .setView(
    {
      lat: TOKYO_CENTER_LAT,
      lng: TOKYO_CENTER_LNG,
    },
    13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

activeMap(); // принудительно перевел карту в активное состояние, оключив работу deactiveMap в своем блоке

// ============================================================================================================
// !Вопрос! - При загрузке карты сайт должен быть деактивирован по дефолтному состоянию?
// Т.е. - сначала грузится сайт, он становиться неактивным, потом грузится карта, потом все обьявления ( <= 10) потом сайт становится активным? Так?
/*
5.10. Форма, с помощью которой производится фильтрация похожих объявлений на момент открытия страницы заблокирована и становится
 доступной только после окончания загрузки всех похожих объявлений, которые в свою очередь начинают загружаться только после загрузки
 и успешной инициализации карты.
*/
// ==============================================================================================================

// подключаем главную иконку
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: TOKYO_CENTER_LAT,
    lng: TOKYO_CENTER_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

// ==============================================================================================================
// Тут по идее должны выноситься данные в DOM и из него уже выноситься в балун.
// Но что то не работает.
// Нужна помощь.
// ==============================================================================================================

const adForm = document.querySelector('.ad-form');
const addressInput = adForm.querySelector('#address');

addressInput.value = `${Number(TOKYO_CENTER_LAT).toFixed(5)}, ${Number(TOKYO_CENTER_LNG).toFixed(5)}`;

mainPinMarker.on('moveend', (evt) => {
  addressInput.value = (`${Number(evt.target.getLatLng().lat).toFixed(5)}, ${Number(evt.target.getLatLng().lng).toFixed(5)}`);
});

// ==============================================================================================================

// Подозреваю, что мы должны получить рандомный обьект данных из функции {createOffer}.
// Согласно ТЗ. 5.1. Полный список похожих объявлений загружается после перехода страницы в активное состояние с сервера https://23.javascript.pages.academy/keksobooking/data.
// Данные с сервера могут быть получены не в полном объёме.
// Пока подключаем временный массив данных для формирования дополнительных меток и проверки работы кода.

const points = [
  {
    title: 'Футура',
    lat: 35.66478515199194,
    lng: 139.7046871667523,
  },
  {
    title: 'Шаверма',
    lat: 35.65068759389131,
    lng: 139.71753727983852,
  },
  {
    title: 'Франк',
    lat: 35.674179397379945,
    lng: 139.7568731836693,
  },
  {
    title: 'Ginza',
    lat: 35.658486463795285,
    lng: 139.74498845891335,
  },
  {
    title: 'Футурама',
    lat: 35.69450377726495,
    lng: 139.70630522985968,
  },
  {
    title: 'Night of the moon',
    lat: 35.66699707628906,
    lng: 139.74788479787486,
  },
];

// =======================================================================================================
// Вопрос - Ballon из демонстарции. Нужен ли Балун сейчас?

// описываем функцию
const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.balloon__title').textContent = point.title;
  popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

  return popupElement;
};

// =======================================================================================================

const markerGroup = L.layerGroup().addTo(map);
// =======================================================================================================
// созадаем вторичные точки

const createMarker = (point) => {
  const {lat, lng} = point;
  const otherPinIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const otherPinMarker = L.marker(
    {
      lat,
      lng,
    },
    {
      otherPinIcon,
    },
  );

  otherPinMarker.addTo(markerGroup).bindPopup(
    createCustomPopup(point),
    {
      keepInView: true,
    },
  );
};

points.forEach((point) => {
  createMarker(point);
});

//=============================================================================================
//Что надо делать дальше для формирования кода в части выполнения данного блока?
