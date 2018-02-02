function cutTheSticks(arr) {
  arr.sort((a,b) => a - b);
  let mini = arr[0];

  console.log(arr.length)
  function oneCut(arr) {
    arr.forEach((x, index) => {
      arr[index] -= mini;
      if (arr[index] < 0) {
        arr[index] = 0;
      }
    });
    arr.splice(0,arr.lastIndexOf(0) + 1); //arr is modified.

    console.log(arr.length);
    if (arr.length > 1) {
      oneCut(arr);
    }
  }
    oneCut(arr);
}

// cutTheSticks([5, 4, 4, 2, 2, 8]); //6 (start nr of sticks) 4 2 1
cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]); //8 6 4 1

//improve the run time + check all possibles instances.
