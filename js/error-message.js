const main = document.querySelector('main');
const errorMessage = (message) => {
  const errorMessageBlock = document.createElement('div');
  errorMessageBlock.classList.add('error__mess');
  errorMessageBlock.textContent = message;

  main.appendChild(errorMessageBlock);
};

export {errorMessage};
