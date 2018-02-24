var gimme = function (inputArray) {
var sorted = inputArray.concat().sort(function(a,b) { return a - b});
  return inputArray.indexOf(sorted[1]);
};
