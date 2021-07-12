import {activeMap} from './switch-map.js';
import {generateAddMarkup} from './generate-add-markup.js';

const TOKYO_CENTER_LAT = 35.69100;
const TOKYO_CENTER_LNG = 139.75370;

const MAIN_ICON_WIDTH = 52;
const MAIN_ICON_LENGTH = 52;
const MAIN_ICON_ANCHOR = 52;
const MAIN_ICON_LINK = '../img/main-pin.svg';

const OTHER_ICON_WIDTH = 40;
const OTHER_ICON_LENGTH = 40;
const OTHER_ICON_ANCHOR = 52;
const OTHER_ICON_LINK = '../img/pin.svg';

const adForm = document.querySelector('.ad-form');
const addressInput = adForm.querySelector('#address');
const map = L.map('map-canvas');

const initMap = () => {
  map.on('load', () => {
    activeMap();
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
};

const setInitAddress = () => {
  addressInput.value = `${Number(TOKYO_CENTER_LAT).toFixed(5)}, ${Number(TOKYO_CENTER_LNG).toFixed(5)}`;
};

const initAddress = (mainPinMarker) => {
  setInitAddress();
  mainPinMarker.on('moveend', (evt) => {
    addressInput.value = (`${Number(evt.target.getLatLng().lat).toFixed(5)}, ${Number(evt.target.getLatLng().lng).toFixed(5)}`);
  });
};

const mainPinIcon = L.icon({
  iconUrl: MAIN_ICON_LINK,
  iconSize: [MAIN_ICON_WIDTH, MAIN_ICON_LENGTH],
  iconAnchor: [MAIN_ICON_ANCHOR/2, MAIN_ICON_ANCHOR],
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

const addMainPinIcon = () => {
  mainPinMarker.addTo(map);
  initAddress(mainPinMarker);
};

const setInitMainPin = () => {
  mainPinMarker.setLatLng({
    lat: TOKYO_CENTER_LAT,
    lng: TOKYO_CENTER_LNG,
  });
};

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (point) => {
  const {lat, lng} = point.location;
  const otherPinIcon = L.icon({
    iconUrl: OTHER_ICON_LINK,
    iconSize: [OTHER_ICON_WIDTH, OTHER_ICON_LENGTH],
    iconAnchor: [OTHER_ICON_ANCHOR/2, OTHER_ICON_ANCHOR],
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

  otherPinMarker.addTo(markerGroup)
    .bindPopup(
      generateAddMarkup(point),
      {
        keepInView: true,
      },
    );
};

const addOtherPinMarker = (offers) => {
  offers.forEach((point) => {
    createMarker(point);
  });
};

export {initMap, addMainPinIcon, addOtherPinMarker, setInitAddress,setInitMainPin};
