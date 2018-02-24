function order(words){
  let arr = words.split(' ');
  let newArr = new Array(arr.length);

  for (let i = 0; i < newArr.length; i++) {
    let regexp = new RegExp (/\d/, 'gi');
    let match = regexp.exec(arr[i]);
      newArr[match-1] = arr[i];
  }
  newArr = newArr.join(" ");
  return newArr;
}
