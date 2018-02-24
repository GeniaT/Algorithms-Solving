function towerBuilder(nFloors) {
  const stringLength = 1 + (nFloors-1) * 2;
  let towerArr = [];
  let firstString;

  function firstLine() {
    firstString = '';

    for (var i = 0; i < (stringLength/2)-1; i++) {
      firstString += ' ';
    }

    firstString += '*' + firstString;
    towerArr.push(firstString);
  }


  function nextline() {
    let nextString = firstString.replace(/\s\*/gi, "**");
    nextString = nextString.replace(/\*\s/gi, "**");
    towerArr.push(nextString);
    // console.log(towerArr);
    firstString = nextString;

    if (towerArr[towerArr.length-1].indexOf("*") !== 0) {
      nextline();
    }

  }

  if (nFloors === 1) return ["*"];
  firstLine();
  nextline();

  return console.log(towerArr);

}
