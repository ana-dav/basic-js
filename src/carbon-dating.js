const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  //if(+sampleActivity.isNaN) return false
  //sampleActivity = MODERN_ACTIVITY - HALF_LIFE_PERIOD
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
