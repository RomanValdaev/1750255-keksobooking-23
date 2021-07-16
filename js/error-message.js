const main = document.querySelector('main');
const getErrorMessage = (message) => {
  const errorMessageBlock = document.createElement('div');
  errorMessageBlock.classList.add('error__mess');
  errorMessageBlock.textContent = message;

  main.appendChild(errorMessageBlock);
};

export {getErrorMessage};
