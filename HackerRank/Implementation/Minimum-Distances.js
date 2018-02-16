function minimumDistances(a) {
  let distances = [];
  for (let i = 0; i < a.length; i++) {
    if (a.lastIndexOf(a[i]) !== a.indexOf(a[i])) {
      distances.push(a.lastIndexOf(a[i]) - a.indexOf(a[i]));
    }
  }
  if (distances.length > 0) {
    return Math.min(...distances);
  } else {
    return -1;
  }
}

minimumDistances([7, 1, 3, 4, 1, 7]); // 3 (|index 1 - index 4|)
