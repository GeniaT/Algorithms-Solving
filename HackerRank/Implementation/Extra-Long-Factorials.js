function extraLongFactorials(n) {
  let result = n;
  for (let i = n-1; i > 0; i--) {
    result = result*i;
  }

  // Need to solve the conversion between exponential format to bigIntegers format.
}

extraLongFactorials(25); //15511210043330985984000000
