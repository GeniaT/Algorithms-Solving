function appendAndDelete(s, t, k) {
  let sArr = s.split("");
  let tArr = t.split("");
  let biggestLength;
  if (s.length > t.length) {
    biggestLength = s.length;
  } else {
    biggestLength = t.length;
  }

  if ((s === t && (k >= s.length*2 || (k % 2 === 0))) || (k > (s.length + t.length))) { //instances like ("aba", "aba", 6)
    // console.log("Yes");                                                 // or ghjkzxcvasdfqwertyuighjkzxcv,
    return "Yes";                                                            // ghjkzxcvasdfqwertyuighjkzxcv, 20
  }

  for(var i = 0; i < biggestLength; i++) {
    if (i === 0 && sArr[i] !== tArr[i] && k >= (s.length + t.length)) { //instances like ("abcdefg", "ijklm", 12)
      // console.log("Yes");
      return "Yes";
    } else if (sArr[i] !== tArr[i] && (s.length + t.length - 2*i <= k)) {//instances like ("hackerrank", "hackerhappy", 10)
      if (((s.length + t.length - 2*i) % 2 === 1 && k % 2 === 1) || ((s.length + t.length - 2*i) % 2 === 0 && k % 2 === 0)) {
        // console.log("Yes");
        return "Yes";
      }
    }
  }
  // console.log("No");
  return "No";
}

// appendAndDelete("hackerhappy", "hackerran", 11);
// appendAndDelete("hackerrank", "hackerhappy", 10); //9,11,13 yes, 10,12 nop
// appendAndDelete("aba", "aba", 6); // >= 6 (6,7,8,9,10,... )YES
// appendAndDelete("abcdefg", "ijklm", 12); // >=12 yes (12,13,14)
// appendAndDelete("zzzzz", "zzzzzzz", 15); //need to result in "Yes" ==> to solve.
appendAndDelete(
"asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv",
"asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv", 20);
