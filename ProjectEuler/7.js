/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?*/ //10 002e element mais j'en ai que 10 000 dans ma liste

var primeNumbers = [2,3]; // pour éviter de gérer les cas particuliers que represente les
                          //chiffres premiers 2 et 3.

for (num = 4; num<999999; num++) { //je commence à 4 car 2 et 3 sont deja dans mon array.
  for (den = 2; den < num; den++) {
    if (num % den==0) {
      //console.log(num + " n'est pas un nombre premier");
      break;
    } if ((num % den != 0) && (den == num-1)) {
      primeNumbers.push(num);
      break;
    }
  }
  if (primeNumbers.length == 10003) { //10003 pour être sur d'avoir un array assez long
    //console.log(primeNumbers);
    console.log("Le 10001ème premier nombre est " + primeNumbers[10000]); //car on commence a compter de 0
    break;
  }
}
