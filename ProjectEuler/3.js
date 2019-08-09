/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

base = 600851475143;
var primeNumbersArray = [2,3]; //On commence l'array par les chifres premiers qu'on connait

for (i=4;i<9999999;i++) { //On continue àpd 4
  for (j=2;j<=i;j++) {
    if (i % j == 0) {//Si pas premier, alors on break.
      break;
    } if ((i % j != 0) && (j > Math.sqrt(i))) { // pour check si premier, il suffit de controler les diviseur de 2 à racine de n.
      primeNumbersArray.push(i);
      break;
    }
  }
}

console.log(primeNumbersArray); //On utilise cette array construite dans notre boucle pour diviser notre nombre par tous les nombres premiers.
//[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,...]

var pos = 0;

for(pos=0;pos<(primeNumbersArray.length-1);pos++) {
var quotient = base/primeNumbersArray[pos]; //On commence par calculer le quotient du grand nombre divisé par le 1er nbre premier de l'array au-dessus
  while(quotient % 1 == 0) {
    var newBase = quotient; //le quotient calculé juste avant devient la nouvelle base
    var newQuotient = newBase/primeNumbersArray[pos]; //On refait l'opération avec le même dénominateur premier tant que le modulo == 0 qui nous donne un nouveau quotient
    console.log("la base est " + base + " , le facteur premier est " + primeNumbersArray[pos] + " et le quotient est " + quotient);
    break;
  }
}























/*// Trouver le nombre de diviseurs du nombre
var a = 13195 / 5;
2639/7= 377/13=29/29=1

Donc il y a 13195=5*7*13*29

Une fois le nombre décomposé en facteurs premiers, on prend chaque puisse en ajoutant 1 et on en fait un produit.
Dans notre cas, cela fait :
(1+1)*(1+1)*(1+1)*(1+1) = 16 diviseurs distincts.

Quels sont-ils à présent: 5/7/13/29   /1/13195/35/65/    135/91/203/377*/
