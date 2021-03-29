const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

   let depth = 1;
   let depth2 = 0;

   for (let i = 0; i < arr.length; i++) {
     if (Array.isArray(arr[i])) {
        depth2 = this.calculateDepth(arr[i]) + 1;
        if (depth2 > depth) {
          depth = depth2;
        }
      }
    }

   return depth;
  }
};