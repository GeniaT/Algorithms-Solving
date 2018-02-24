function spinWords(text){
   var splitted = text.split(' ');
  console.log(splitted);
  for (var wordIndex = 0; wordIndex < splitted.length; wordIndex++) {
    if (splitted[wordIndex].length >= 5) {
      splitted[wordIndex] = splitted[wordIndex].split('').reverse().join('');
    }
  }
  return splitted.join(' ');
}
