/* The following function implements the roll of a die; it returns a random number between 1 and 6 each time it is called.
However, instead of a random die, we want to create a cheat die that would let us predict 
the next number. Create a function called makeLoadedDie() which returns a function that when called, 
seems to generate random numbers between 1 and 6, but in fact returns numbers in a row from a hardcoded list.
*/
function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var curElement = -1;
  return function() {
    /* your code here */
    curElement++;
    return list[curElement];
  };
}

// var rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie());  // 5
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6

function makeLoadedDieAdv() {
  var list = [];
  for (var i = 0; i < 100; i++) {
    list.push(Math.floor(1 + Math.random() * 6));
  }
  
  /* your code here */
  var curElement = -1;
  return function() {
    /* your code here */
    curElement++;
    console.log(list);
    return list[curElement];
  };
}
console.log()