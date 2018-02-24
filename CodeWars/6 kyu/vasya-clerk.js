function tickets(peopleInLine){
  var cashier = {
    twentyFive: 0,
    fifty: 0
  }

  for (var i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      cashier.twentyFive += 1;
    } else if (peopleInLine[i] === 50) {
      if (cashier.twentyFive === 0) {
        return 'NO';
      }
      cashier.fifty += 1;
      cashier.twentyFive -= 1;
    } else if (peopleInLine[i] === 100) {
      if ((cashier.twentyFive >=1 && cashier.fifty >=1)) {
        cashier.twentyFive -= 1;
        cashier.fifty -= 1;
    } else if (cashier.twentyFive >= 3) {
        cashier.twentyFive -= 3;
    } else {
      return 'NO';
    }

  }

}
   return 'YES';
}
