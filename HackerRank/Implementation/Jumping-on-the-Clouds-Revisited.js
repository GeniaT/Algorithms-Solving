function jumpingOnClouds(c, k) {
  let e = 100;
  const MAX = c.length;

  for (let i = k; i < MAX; i += k) {
    c[i] === 1 ? e-= 3 : e-=1;
    // console.log(e);
    if (i <= MAX && i >= MAX - k) {
      i = i + k - MAX;
      c[i] === 1 ? e-= 3 : e-=1;
      // console.log(e);
      break;
    }
  }
  console.log(e);
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0,], 2);
