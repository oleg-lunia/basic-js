const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let separator;
  let additionSeparator;
  let repeatTimes;
  let additionRepeatTimes;
  let addition;

  if (options.addition === undefined) {
    addition = '';
  } else {
    addition = options.addition;
  }


  if (options.repeatTimes == undefined) {
    repeatTimes = 1;
  } else {
    repeatTimes = options.repeatTimes;
  } 

  if (options.additionRepeatTimes == undefined) {
    additionRepeatTimes = 1;
  } else {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  if (options.separator == undefined) {
    separator = '+';
  } else {
    separator = String(options.separator);
  }

  if (options.additionSeparator == undefined) {
    additionSeparator = '|';
  } else {
    additionSeparator = options.additionSeparator;
  }

  let str2 = '';

  for (let i = 0; i < additionRepeatTimes; i++) {
    str2 += `${String(addition)}` + `${additionSeparator}`;
  }
  let strAddition = str2.substring(0, (str2.length - additionSeparator.length));

  let str3 = '';
  for (let a = 0; a < repeatTimes; a++) {
    str3 += `${String(str)}` + `${strAddition}` + `${separator}`;
  }

  let strRepeater = str3.substring(0, (str3.length - separator.length));
  return strRepeater;
};
  