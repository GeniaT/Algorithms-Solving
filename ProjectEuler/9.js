/*A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a² + b² = c²
For example, 3² + 4² = 9 + 16 = 25 = 5².

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/


for (a=1;a<=1000;a++) {
  for (b=1;b<=1000;b++) {
    var c = Math.sqrt(a*a + b*b);
    if ((c%1==0) && (1000==a+b+c) && (c!=0)) { //modulo 1 indique si la racine calcule est un nombre entier ou non
      console.log(a + " +" + b + " +" + c + " vaut 1000!");
      console.log("Le produit de a b et c vaut " +  a*b*c);
    }
  }
}













//
