function libraryFine(d1, m1, y1, d2, m2, y2) {
  let fine;

  if (y1 > y2) {
    fine = 10000;
  } else if (y1 === y2 && m1 > m2) {
    fine = 500 * (m1 - m2);
  } else if (y1 === y2 && m1 === m2 && d1 > d2) {
    fine = 15 * (d1 - d2);
  } else {
    fine = 0;
  }
  // console.log(fine);
  return fine;
}

libraryFine(9, 6, 2015, 6, 6, 2015); //45

libraryFine(2, 7, 2015, 1, 2, 2014); //10000
