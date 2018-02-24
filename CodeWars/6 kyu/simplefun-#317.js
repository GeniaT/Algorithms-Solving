function coordinateHelper(cmd){
  let position = [0,0];

  for (let move = 0; move < cmd.length; move++) {
    const myregexp = /^[ASDW](\d{1,4})$/ig;
    const direction = cmd[move];

    if (myregexp.test(direction)) {
      let distance = direction.slice(1);

      switch(direction[0]) {
        case 'A':
          position[0] -= Number(distance);
          break;
        case 'D':
          position[0] += Number(distance);
          break;
        case 'S':
          position[1] -= Number(distance);
          break;
        case 'W':
          position[1] += Number(distance);
          break;
      }
    }
  }
  return position;

}
