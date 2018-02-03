function camelcase(s) {
  let words = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      words++;
    }
  }
  return words;
}

camelcase("saveChangesInTheEditor"); // 5
