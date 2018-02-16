function chocolateFeast(n, c, m) {
  let money = n;
  let cost = c;
  let wrappersNeeded = m;
  let chocolates = 0;

  chocolates = Math.floor(money/cost);
  // console.log(chocolates);

  for (let wrappers = chocolates; wrappers >= wrappersNeeded; wrappers-=wrappersNeeded) {
    chocolates++;
    wrappers++;
    // console.log(chocolates);
    // console.log(wrappers)
  }
  return chocolates;
}

chocolateFeast(10, 2, 5); //6
// chocolateFeast(12, 4, 4); //3
// chocolateFeast(6, 2, 2); //5
