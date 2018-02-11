function jumpingOnClouds(c) {
  let jumpsDone = 0;
  for (let cloudIndex = 0; cloudIndex < c.length;) {
    if (c[cloudIndex+2] === 0 && cloudIndex + 2 < c.length) {
      cloudIndex+=2;
      jumpsDone++;
    } else {
      cloudIndex++;
      jumpsDone++;
    }
  }
  return jumpsDone - 1;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);//4
// jumpingOnClouds([0, 0, 0, 0, 1, 0]);//3
