function almostIncreasingSequence(sequence) {
  var woDupl = [ ...new Set(sequence) ];
    if (sequence.length > woDupl.length + 1) {
           return false;
        }
    if(sequence.length>100000) {
        return false;
    }

    for (var i = 0; i < sequence.length; i++) {
        if (i < -100000 || i > 100000) {
            return false;
        }
      var sequenceCopy = sequence.concat();
      sequenceCopy.splice(i,1);
      var copycopy = sequenceCopy.concat();
      copycopy.sort(function(a,b){return a - b});

      var copyString = JSON.stringify(sequenceCopy);
      var copycopyString = JSON.stringify(copycopy);
      if (copyString == copycopyString) {
        return true;
      } else if (i === sequence.length-1 && copyString != copycopyString) {
        return false;
      }

    }
}
