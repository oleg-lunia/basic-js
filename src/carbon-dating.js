const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string') {
    return false;
  }
  let numSample = Number(sampleActivity);
  if (isNaN(numSample) == true) {
    return false;
  } else if (numSample == 0) {
    return false;
  } else if (numSample > 15 || numSample < 0) {
    return false;
  } else {
    let number = Math.log(MODERN_ACTIVITY/numSample)/(Math.log(2)/HALF_LIFE_PERIOD);
    return Math.ceil(number);
  }
};
