function candies(n, arr) {
  let givenCandies = arr.map((x) => x = 1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i-1]) {
      givenCandies[i] = givenCandies[i-1] + 1;
    }
  }

  for (let i = arr.length-1; i >= 0; i--) {
    if (arr[i] > arr[i+1]) {
      givenCandies[i] = givenCandies[i+1] + 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (givenCandies[i] === givenCandies[i-1] && arr[i] >= arr[i-1]) {
      givenCandies[i] = givenCandies[i] + 1;
    }
  }

  console.log(givenCandies);
  console.log(givenCandies.reduce((accumulator, currentValue) => accumulator + currentValue));
}

// candies(3,[1,2,2]); //4
// candies(6,[1,1,1,1,1,1]);//9
// candies(10,[2,4,2,6,1,7,8,9,2,1]);//19 1 2 1 2 1 2 3 4 2 1
// candies(6,[1,5,4,3,2,1]);// 1 5 4 3 2 1 => 16
// candies(4,[1,2,1,2]); // 6
// candies(12, [5,4,3,2,1,1,1,2,2,10,11,10]); // 5 4 3 2 1 2 1 2 1 2 3 1 = 27
// candies(21, [55,55,22,22,11,11,11,66,66,1,1,2,2,3,3,4,5,6,3,2,1]);// 121212123123121234321 => 40
candies(2,[2,2,2,2,2,2,2,1,1,1,1,7,7,7,7,7,7,6,6,2,2,2,2]);
          // [1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 3 2 3 1 2 1 2] //36
// candies(1,[66,66,1,1,2,2,3,3,4,5,6]); //1 2 1 2 3 1 2 1 2 3 4 = 22
// candies(9,[55,55,22,22,11,11,11,66,66,1]); // 1212121231 => 16
// candies(9,[55,55,22,22,11,11,11,66,66,1,1]); // 12121212312 => 18
// candies(3, [55,55,22]);
// candies(10, [9, 2, 3, 6, 5, 4, 3, 2, 2, 2]); //2 1 2 5 4 3 2 1 2 1
