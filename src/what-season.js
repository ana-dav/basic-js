const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const SEASONS = ['spring', 'summer', 'autumn', 'winter']

  if(date == null) return 'Unable to determine the time of year!'
  if(!(Object.prototype.toString.call(date) === '[object Date]')) throw new Error()
  const month = date.getMonth()

  if (month == 0 || month == 1 || month == 11 ) return SEASONS[3]
  if (month == 2 || month == 3 || month == 4) return SEASONS[0]
  if (month == 5 || month == 6 || month == 7) return SEASONS[1]
  if (month == 8 || month == 9 || month == 10) return SEASONS[2]
  
};
