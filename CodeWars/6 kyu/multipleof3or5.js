function solution(number){
  let arrOfMultiples = []

  for (let i = 3; i < number; i+=3) {
    i%3===0 ? arrOfMultiples.push(i) : null
  }

  for (let i = 5; i < number; i+=5) {
   i%5===0 ? arrOfMultiples.push(i) : null
  }

  const woMult = Array.from(new Set(arrOfMultiples))

  if (woMult[0] === undefined) {return 0}

  const result = woMult.reduce((a,b) => a + b)
  return result
}
