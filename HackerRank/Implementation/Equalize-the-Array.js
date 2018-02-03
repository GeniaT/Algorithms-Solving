function equalizeArray(arr) {
  const sorted = arr.sort((a, b) => a - b);
  let occurences = 0;
  if (sorted[0] === sorted[sorted.length-1]) {
    return 0;
  }
  sorted.forEach((x, index) => {
    if ((sorted.lastIndexOf(x) - index) >= occurences) {
      occurences = sorted.lastIndexOf(x) - index + 1;
    }
  });

  if (occurences === 0) {
    return arr.length - 1;
  } else {
    return arr.length - occurences;
  }
}

// equalizeArray([3, 3, 2, 1, 3]); // 2
// equalizeArray([4, 2, 1, 3]); // 3
// equalizeArray([1, 1, 1, 1]); // 0
equalizeArray([35, 65, 69, 28, 12, 69, 37, 80, 80, 50, 80, 50, 15, 57, 79, 69, 57, 65, 15, 69, 57, 50, 65, 2,
   14, 64, 15, 65, 65, 5, 15, 64, 57, 37, 50, 12, 64 ,37, 28, 20, 80, 80, 50]); //38
