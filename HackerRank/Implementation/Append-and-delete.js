function appendAndDelete(s, t, k) {
  let sArr = s.split("");
  let tArr = t.split("");

  // console.log(sArr);
  // console.log(tArr);

  for(var i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) {
      // console.log(i);
      break;
    }
  };
  console.log(i);
  if (s === t) {
    console.log("Yes");
    return "Yes";
  } else if (s.length + t.length - 2*i <= k) {
    console.log("Yes");
    return "Yes";
  } else {
    console.log("No");
    return "No";
  }

}

 appendAndDelete("hackerhappy", "hackerrank", 9); // YES
 appendAndDelete("hackerrank", "hackerhappy", 9); //

appendAndDelete("aba", "aba", 7); // YES
