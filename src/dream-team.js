const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(Array.isArray(members))) return false
  return members
    .filter(name => typeof(name) === 'string')
    .map(name => name.trim().substring(0, 1).toUpperCase())
    .sort()
    .join('')
};
