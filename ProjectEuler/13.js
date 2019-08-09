function titleCase(str) {

str = str.toLowerCase();
str = str.split(" ");

var str1=[];

for (i = 0; i < str.length; i++) {//longeur de l'array
  var maj = str[i][0]; //chaque 1st character

  maj = maj.toUpperCase(); //Make the 1st letter of word UpperCase
  var test = str[i].replace(str[i][0],maj.toUpperCase());//replace teh word of my initial array but the word with 1st letter as UpperCase
  str1 = (str1 + " ").concat(test);//concat all word with a space in between
}
str = String(str1);
console.log(str);
return str;//return the value outside for loop
}

titleCase("I'm a little tea pot");
