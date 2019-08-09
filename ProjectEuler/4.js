/*Un nombre palindromique se lit de la même manière de gauche à droite et de droite
à gauche. Le plus grand palindrome fait du produit de 2 nombres à 2 chiffres est 9009=91⋅99

Trouvez le plus grand palindrome fait du produit de 2 nombres à 3 chiffres.*/



//999*999-i= x i limite = 100 //sinon plus un produit de 3 chiffres
//check si x=palindrome.

nb2 = 999*999;
nb1 = 999*100;
//Identification des limites pour vérifier le résultat
console.log("Le plus grand palindrom issu d'un produit de 3 chiffres est compris entre " + nb1 + "et " + nb2);


var palindromes=[]; // Array qui listera les palindromes trouvé durant la boucle

for (j=999;j>100;j--) { //On commence par 999*999 puis 999*998 jusqu'à 100
for(i=999;i>100;i--) { //Et ensuite on continue avec 998*999 pour faire tous les produits possibles
  var nbrToConvert = j*i;
  var converti = nbrToConvert.toString();

  if (nbrToConvert.length=6){
    if (converti[0]==converti[5]&&converti[1]==converti[4]&&converti[2]==converti[3]) {
      palindromes.push(nbrToConvert);
      if (nbrToConvert==906609){ //brutal mais après avoir identifié le
        console.log(j + " et " + i); //plus grand palindrome, je voulais afficher le produit le constituant
      }
      break;                //Pour ce problème le produit est 993 * 913 = 906609
    }
  }
  }
}

//On passe tous les palindromes en revue pour en garder que le plus gros
var biggestPalindrome = 0;
for(k=0;k<palindromes.length-1;k++) {
  if (palindromes[k]>biggestPalindrome) {
    biggestPalindrome = palindromes[k];
  } else {
    biggestPalindrome = biggestPalindrome;
  }
}
console.log(biggestPalindrome);
