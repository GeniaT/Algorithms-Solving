function squares(a, b) {
  let toAddNext;
  let squaresNumbers = 0;

  for (let i = a; i <= b;) {
    if (Math.sqrt(i) % 1 === 0) {
      squaresNumbers++;
      //once we find a square integer, we can find the next one by:
      toAddNext = Math.sqrt(i) * 2 + 1; //to find 25 from 16, do 16 + Math.sqrt(16)/2 + 1 = 25
      i += toAddNext;
    } else {
      i++;
    }
  }
  console.log(squaresNumbers);
  return squaresNumbers;
}

squares(1,2); //1
squares(17,24); //0
squares(3,9); //2
squares(121,256); //6

// 1 4 9 16 25 36 49 64 81 100 121 144 169 196 225 256
//
// 3 4 5 7 9 11 13 15 17 19 21   23  25  27  29  31
