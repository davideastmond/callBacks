function findWaldo(arr, found) {
  /*
  Use the forEach() array method and upon each iteration
  use an annonymous function to evaluate the element at the current
  iteration. We get the index of the element by calling the array's
  at index method. Call the callback function to return the index
  at which the element was found.
  */

  arr.array.forEach(element => {
    if (element === "Waldo") {
      found(arr.indexOf(element));
    }
  });
}

function actionWhenFound(atIndex) {
  console.log("Found him at " + atIndex);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);