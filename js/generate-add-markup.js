const MIN_NUMBER_CHAR = 2;
const FOTO_WIDTH = 45;
const FOTO_HEIGHT = 40;

const houseTypeData = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const cardTemplateContent = document.querySelector('#card').content;

const generateAddMarkup = ({offer, author}) => {
  const ticket = cardTemplateContent.cloneNode(true);
  if (offer.title.length < MIN_NUMBER_CHAR) {
    ticket.querySelector('.popup__title').classList.add('hidden');
  } else {
    ticket.querySelector('.popup__title').textContent = offer.title;
  }
  if (offer.address.length < MIN_NUMBER_CHAR) {
    ticket.querySelector('.popup__text--address').classList.add('hidden');
  } else {
    ticket.querySelector('.popup__text--address').textContent = offer.address;
  }
  if (offer.price.length < MIN_NUMBER_CHAR) {
    ticket.querySelector('.popup__text--price').classList.add('hidden');
  } else {
    ticket.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  }

  ticket.querySelector('.popup__type').textContent = houseTypeData[offer.type];
  ticket.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат(ы) для ${offer.guests} гостей`;
  ticket.querySelector ('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const listAccessOptions = ticket.querySelector('.popup__features');
  listAccessOptions.innerHTML = '';
  const featuresData = offer.features;

  if (featuresData && featuresData.length === 0) {
    ticket.querySelector('.popup__feature').classList('hidden');
  } else if (featuresData) {
    for (let featureData = 0;  featureData < featuresData.length; featureData++) {
      const listFeatureItem = document.createElement('li');
      listFeatureItem.classList.add('popup__feature');
      listFeatureItem.classList.add(`popup__feature--${featuresData[featureData].toLowerCase()}`);
      listAccessOptions.appendChild(listFeatureItem);
    }
  }
  const fotoElement = ticket.querySelector('.popup__photos');
  fotoElement.innerHTML = '';
  const fotoElementData = offer.photos;

  if (fotoElementData && fotoElementData.length === 0) {
    fotoElement.classList.add('hidden');
  } else if (fotoElementData) {
    for (let fotoElementItem = 0; fotoElementItem < fotoElementData.length; fotoElementItem++) {
      const fotoElementImg  = document.createElement('img');
      fotoElementImg.classList.add('popup__photo');
      fotoElementImg.src = `${fotoElementData[fotoElementItem]}`;
      fotoElementImg.width = FOTO_WIDTH;
      fotoElementImg.height = FOTO_HEIGHT;
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
