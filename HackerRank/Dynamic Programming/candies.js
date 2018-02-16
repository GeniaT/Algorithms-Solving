function candies(n, arr) {
  let next;
  let candies = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i+1] > arr[i]) {

    } else if (arr[i+1] < arr[i]) {

    }
  }
}

candies(3,[1,2,2]); //4
candies(6,[1,1,1,1,1,1]);//9
candies(10,[2,4,2,6,1,7,8,9,2]);//19
candies(6,[1,5,4,3,2,1]);//+- => total -3, [1,5,4,3,2,1] check all numbers from 5 to 1 to decide how many candies to give to the 2nd child
candies(6,[2,3,4,5,6,7]);
candies(4,[1,2,1,2]); // +- => +1
