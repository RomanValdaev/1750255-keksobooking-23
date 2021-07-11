const alertMessageError = document.querySelector('#error').content.querySelector('.error');
const alertMessageSuccess = document.querySelector('#success').content.querySelector('.success');

const map = document.querySelector('.map');
const mapCanvas = map.querySelector('#map-canvas');

const errorMessage = (message) => {
  const errorMessageBlock = document.createElement('div');
  errorMessageBlock.style.cssText = `
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 20px;
    border: 2px solid #cb2020;
    background-color: #ff7573;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    font-size: 1.5em;
    line-height: 1em;
    font-weight: bold;
    z-index: 100;
  `;
  errorMessageBlock.textContent = message;
  mapCanvas.appendChild(errorMessageBlock);
};

export {errorMessage};
