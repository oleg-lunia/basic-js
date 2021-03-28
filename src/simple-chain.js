const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  stack: [],

  getLength() {
    this.stack.length;
    return this;
  },

  addLink(value) {
    if (value === undefined) {
      this.stack.push('( )~~')
    } else {
      this.stack.push('( ' + String(value) + ' )~~');
    }
    return this;
  },

  removeLink(position) {
    if (typeof position != 'number' || !Number.isInteger(position) || position > this.stack.length -1 || position < 0) {
      this.stack.length = [];
      throw new Error();
    }  else {
      this.stack.splice(position -1, 1);
      return this;
    }
  },
  
  reverseChain() {
    this.stack.reverse();
    return this;
  },

  finishChain() {
    let str = this.stack.join('');
    let arr = str.split('');
    arr.splice(arr.length - 2, 2);
    let chain = arr.join('');
    this.stack = [];
    return chain;
  }
};

module.exports = chainMaker;
