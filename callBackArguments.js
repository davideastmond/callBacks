function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(atIndex) {
  console.log("Found him at " + atIndex);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);