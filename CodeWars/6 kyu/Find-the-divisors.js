function divisors(integer) {
  let divisorsArray = [];
  for (let divisors = 2; divisors < integer - 1; divisors ++) {
    integer % divisors === 0 ? divisorsArray.push(divisors) : 0;
  }
  return divisorsArray.length > 0 ? divisorsArray : `${integer} is prime`;

};
