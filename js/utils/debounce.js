const TIME_OUT_VALUE = 500;

const debounce = (callback, timeoutDelay) => {
  timeoutDelay = TIME_OUT_VALUE;
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

//==========================================================================
// const debounce = (callback, timeoutDelay = 500) => {
//   let timeoutId;

//   return (...rest) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
//   };
// };
//==========================================================================

export {debounce};
