function validBraces(braces) {
  const brackets = [['(', '[', '{'],[')', ']', '}']];
  var bracesArr = braces.split("");

  letsSlice(braces);

  function letsSlice(braces) {
    for ( let i = 0; i < bracesArr.length; i++) {
      let closedBraIndex = brackets[1].indexOf(bracesArr[i]);
      if (closedBraIndex !== (-1)) {//if it's a closed brace
         if (bracesArr[i-1] !== (brackets[0][closedBraIndex])) { //if the previous brace isn't an open equivalent
           return false;
         } else if (bracesArr.length === 2) {
           return true;
         } else {
           bracesArr.splice(i-1,2);
           letsSlice(braces);
           }
         } else if (brackets[1].indexOf(bracesArr[bracesArr.length-1]) === -1) {
           return false;
         }
      }
    }

    return letsSlice(braces);
  }
