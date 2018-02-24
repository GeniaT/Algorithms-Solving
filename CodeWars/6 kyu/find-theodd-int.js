function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    const sorted = arr.sort((a, b) => a - b); //[-2, -2, -1, -1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 20, 20]
    const firstIndex = sorted.indexOf(sorted[i]);
    const lastIndex = sorted.lastIndexOf(sorted[i]);

    if ((lastIndex - firstIndex) % 2 === 0) {
      return sorted[i]
    }
  }
}
