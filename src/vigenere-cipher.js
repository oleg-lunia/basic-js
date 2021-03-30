const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  encrypt(message, key) {

    if (message === undefined || key === undefined) {
      Error();
    }
    let obj = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25
    }
    let obj2 = {
      0: 'A',
      1: 'B',
      2: 'C',
      3: 'D',
      4: 'E',
      5: 'F',
      6: 'G',
      7: 'H',
      8: 'I',
      9: 'J',
      10: 'K',
      11: 'L',
      12: 'M',
      13: 'N',
      14: 'O',
      15: 'P',
      16: 'Q',
      17: 'R',
      18: 'S',
      19: 'T',
      20: 'U',
      21: 'V',
      22: 'W',
      23: 'X',
      24: 'Y',
      25: 'Z'
    }
    let stack = [];
    let stack2 =[];
    let str = message.toUpperCase();
    key = key.toUpperCase();
    let strLength = str.length;
    let arrKey = key.repeat(Math.ceil(strLength / key.length)).split('');
    let arrMes = str.split('');

    for (let i = 0; i < arrMes.length; i++) {
      if (arrMes[i] == arrMes[i].match(/[a-z]/i)) {
        arrKey[i] = arrKey[i];
      } else {
        arrKey.splice(i, 0, arrMes[i]);
      }
      arrKey.splice(arrMes.length, arrKey.length - arrMes.length);
    }

    for (let i = 0; i < arrMes.length; i++) {
      if (arrMes[i] == arrMes[i].match(/[a-z]/i)) {
        stack[i] = obj[arrMes[i]] + obj[arrKey[i]];
      } else {
        stack[i] = arrMes[i];
      }
        
    }
    for (let a = 0; a< stack.length; a++) {
      if (stack[a] === ' ') {
        stack2[a] = ' ';
      } else if (stack[a] > 25 && typeof stack[a] == 'number') {
        stack2[a] = obj2[stack[a]-26];
      } else if (stack[a] < 26 && typeof stack[a] == 'number') {
        stack2[a] = obj2[stack[a]]; 
      } else {
        stack2[a] = stack[a];
      }
    }
    
    let cipher = stack2.join('');
    return cipher;
    
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      Error();
    } 
    let obj = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25
    }
    let obj2 = {
      0: 'A',
      1: 'B',
      2: 'C',
      3: 'D',
      4: 'E',
      5: 'F',
      6: 'G',
      7: 'H',
      8: 'I',
      9: 'J',
      10: 'K',
      11: 'L',
      12: 'M',
      13: 'N',
      14: 'O',
      15: 'P',
      16: 'Q',
      17: 'R',
      18: 'S',
      19: 'T',
      20: 'U',
      21: 'V',
      22: 'W',
      23: 'X',
      24: 'Y',
      25: 'Z'
    }
    let stack3 =[];
    let stack4 = [];
    let strEncrypt = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let strEncryptLength = strEncrypt.length;
    let arrKey = key.repeat(Math.ceil(strEncryptLength / key.length)).split('');
    let arrEncrypt = strEncrypt.split('');

    for (let i = 0; i < arrEncrypt.length; i++) {
      if (arrEncrypt[i] == arrEncrypt[i].match(/[a-z]/i)) {
        arrKey[i] = arrKey[i];
      } else {
        arrKey.splice(i, 0, arrEncrypt[i]);
      }
      arrKey.splice(arrEncrypt.length, arrKey.length - arrEncrypt.length);
    }

    for (let i = 0; i < arrEncrypt.length; i++) {
      if (arrEncrypt[i] == arrEncrypt[i].match(/[a-z]/i)) {
        stack3[i] = obj[arrEncrypt[i]] - obj[arrKey[i]];
      } else {
        stack3[i] = arrEncrypt[i];
      }
    }
    for (let a = 0; a< stack3.length; a++) {
      if (stack3[a] === ' ') {
        stack4[a] = ' ';
      } else if (stack3[a] < 0 && typeof stack3[a] == 'number') {
        stack4[a] = obj2[stack3[a]+26];
      } else if (stack3[a] >= 0 && typeof stack3[a] == 'number') {
        stack4[a] = obj2[stack3[a]]; 
      } else {
        stack4[a] = stack3[a];
      }
    }
    let decryption = stack4.join('');
    return decryption;
  }
}

module.exports = VigenereCipheringMachine;
