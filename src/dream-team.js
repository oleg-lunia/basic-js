const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let stack = [];

  if (!Array.isArray(members)) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) == 'string') {
      let name = members[i].match(/\b\p{L}/giu);
    stack.push(name[0].toUpperCase());
    }
  }
  stack.sort();
  let str = stack.join('');
  return str;
};
