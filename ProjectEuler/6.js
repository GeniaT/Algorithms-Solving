/*The sum of the squares of the first ten natural numbers is,
1² + 2² + ... + 10² = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)² = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.*/

//Sum of squares of the first 100 numbers

var sum1=0;
for(i=0;i<=100;i++) {
  var square=i*i;
  var sum1 = sum1 + square;
  console.log(sum1);
}
console.log("la sommes des 100 premiers carrés est " + sum1);

// Square of the sum of the first 100 numbers
  var sum2=0;
for (j=0;j<=100;j++) {
  var sum2 = sum2 + j;
}

var sum2Square = sum2 * sum2;
console.log("La somme des 100 chiffres au carré " + sum2Square);
var finalResult = sum2Square - sum1;
console.log("La différence entre les carrés des 100 chiffres et la somme au carré est " + finalResult);
// Difference between 2nd and 1st result
