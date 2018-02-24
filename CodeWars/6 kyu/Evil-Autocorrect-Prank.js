function autocorrect(input){
  let newString = input.replace(/\b(you+|u)\b/gi, 'your sister'); // Best Solution by far.
  console.log(newString);
}
