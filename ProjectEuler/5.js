/*2520 est le plus petit nombre divisible par tous les nombres de 1 à 10 avec un résultat entier.

Quel est le plus petit nombre positif divisible par tous les nombres de 1 à 20 avec un résultat entier ?*/

var i
var j



for (i=1;i<999999999;i++) {
  for (j=1;j<=20;j++) { //Loop pour paser tous les diviseurs de 1 à 20
      if (i%j!=0){ //Si resultat à decimale, next!
        break;
}      if (i%j==0) {
  //console.log(i + " est divisible par " + j);
        if (j==20) { //identifier les nombres qui sont divisibles de 1 à 20
          console.log(i + " est divisible par 1 à 20");
          var verif = i / 20;
          console.log(verif); // pour Contrôle
          break;
        }
    }
  }
}


//Question pour améliorer: Comment n'afficher que le 1er résultat et non tous les nombres
//divisibles par 1 à 20?
