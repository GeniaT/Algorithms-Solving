function marsExploration(s) {
  let alterations = 0;
  for (let i = 0; i < s.length; i += 3) {
    s[i] !== "S" ? alterations++ : null;
    s[i+1] !== "O" ? alterations++ : null;
    s[i+2] !== "S" ? alterations++ : null;
  }
return alterations
}

marsExploration("SOSSPSSQSSOR"); // 3
