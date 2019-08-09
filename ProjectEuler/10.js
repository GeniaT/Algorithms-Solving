/*The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.*/

var primeNumbersSum = 5;
for (num = 4; num<2000000; num++) { //je commence à 4 car 2 et 3 sont deja dans mon array.
  for (den = 2; den <= num; den++) {
    var a = Math.sqrt(num);
    if (num % den==0) {//Si pas premier, alors on break.
      break;
    } if ((num % den != 0) && (den > Math.sqrt(num))) { // Il suffit de divisier de 2 à racine carrée du nombre pour s'assurer qu'il est premier.
      primeNumbersSum = primeNumbersSum + num; //Donc une fois cette racine dépassée, on l'ajoute à la somme car c'est un premier.
      break;
    }
  }
}

console.log("La sommes des nombres premiers en dessous de 2000000 vaut " + primeNumbersSum);
