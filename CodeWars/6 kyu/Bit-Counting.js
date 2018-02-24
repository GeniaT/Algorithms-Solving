var countBits = function(n) {
  const bin = n.toString(2);
  let ones = 0;
  for (let binChar = 0; binChar < bin.length; binChar++) {
    bin[binChar] === "1" ? ones++ : 0;
  }
  return ones;
};
