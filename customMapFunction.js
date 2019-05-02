/* Custom map function takes an array and an annonymous function that
indicates what is to be performed on each element of the array*/

function map (arr, annonFunction) {
  var returnArray = [];
  // Iterate through the array
  for (var i = 0; i < arr.length; i++) {
    // reference the actual function reference, perform the action and add the result
    // to the array that is to be returned
    returnArray.push(annonFunction(arr[i]));
  }
  console.log(returnArray);
  return returnArray;
}

// Test code
var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
