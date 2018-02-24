function findShort(s){
  var array = s.split(" ");
  var shortest = array[0].length;
  console.log(array);



  for (var i = 0; i < array.length; i++) {
    if (array[i].length < shortest) {
      shortest = array[i].length;
    }
  }
  return shortest;
}
