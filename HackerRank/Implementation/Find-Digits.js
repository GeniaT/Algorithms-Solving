function findDigits(n) {
  let dividers = 0;
  let nArr = String(n).split("");

  nArr.forEach((digit) => {
    n % Number(digit) === 0 ? dividers++ : null;
  });
  return dividers;
}

findDigits(1012); // 3
