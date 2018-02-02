function jumpingOnClouds(c, k) {
  let e = 100;
  const MAX = c.length;

  if (k === MAX) { //edge case
    return c[0] === 1 ? 97 : 99;
  }

  for (let i = k; i < MAX; i += k) {
    c[i] === 1 ? e-= 3 : e-=1;
    if (i <= MAX && i >= MAX - k) { //if we get close to the end of array C and jump one the starting cloud of further.
      i = i + k - MAX;
      c[i] === 1 ? e-= 3 : e-=1;
      break;
    }
  }
  return e;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0,], 2);
