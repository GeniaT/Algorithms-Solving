function repeatedString(s, n) {
  let a = 0;
  let aInWord = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      aInWord++;
    }
  }

  let modulo = n % s.length;
  a = ((n - modulo) / s.length) * aInWord;

  if (modulo !== 0) {
    for (let i = 0; i < modulo; i++) {
      if (s[i] === "a") {
        a += 1;
      }
    }
  }
  // console.log(a)
  return a;
}

repeatedString("aba", 10); //7 letters "a"
repeatedString("a", 1000000000000); // 1000000000000 "a"s
