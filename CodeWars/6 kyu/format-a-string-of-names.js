function list(names){
  let arr = [];

  names.forEach(function(element) {
    arr.push(element.name);
  });

  if (arr.length === 0) return '';
  if (arr.length === 1) return arr[0];

  arr = arr.join(', ');
  let last = arr.lastIndexOf(',');
  arr = arr.substr(0, last) + " &" + arr.substr(last+1);
  return arr;
}
