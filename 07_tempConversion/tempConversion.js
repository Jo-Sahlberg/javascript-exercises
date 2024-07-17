const convertToCelsius = function(tempF) {
  let convertedNum = (tempF - 32) * 5/9;
  return convertedNum.toFixed(1);
};

const convertToFahrenheit = function(tempC) {
  let convertedNum = tempC * (9/5) + 32;
  return convertedNum.toFixed(1); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
