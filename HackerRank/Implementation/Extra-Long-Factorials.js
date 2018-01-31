function extraLongFactorials(n) {
  let result = n;
  for (let i = n-1; i > 0; i--) {
    result = result*i;
  }
  console.log(result);
}

extraLongFactorials(25); //15511210043330985984000000
