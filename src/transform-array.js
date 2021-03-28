const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {


  let stack = [];

  if (!Array.isArray(arr)) {
    Error;
  }

  if (arr.length == 0) {
    return stack;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      i++;
    } else if (arr[i] == '--discard-prev' && i != 0 && arr[i-2] != '--discard-next') {
      stack.pop();
    } else if (arr[i] == '--double-next' && i != arr.length -1 ) {
      stack.push(arr[i+1]);
    } else if (arr[i] == '--double-prev' && i != 0 && arr[i-2] != '--discard-next') {
      stack.push(arr[i-1]);
    } else if ( arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev') {
      stack.push(arr[i]);
    }
  }

  return stack;

}