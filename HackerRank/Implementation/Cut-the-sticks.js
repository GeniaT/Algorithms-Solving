function cutTheSticks(arr) {
  console.log(arr.length);
  let min = Math.min(...arr);
  arr = arr.map(x => x - min).filter(x => x !== 0);
  if (arr.length === 2 && arr[0]===arr[1]) {
    console.log(2);
  } else if (arr.length >= 2) {
    return cutTheSticks(arr);
  } else if (arr.length === 1){
    console.log(1);
  }
}


cutTheSticks([5, 4, 4, 2, 2, 8]); //6 (start nr of sticks) 4 2 1
// cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]); //8 6 4 1
// cutTheSticks([8, 8, 14, 10, 3, 5, 14, 12]); // 8 7 6 4 3 2
// cutTheSticks([1,1,1,1]); // 4
