// 1 x  -Push the element x into the stack.
// 2    -Delete the element present at the top of the stack.
// 3    -Print the maximum element in the stack.

// Too slow, review the code and check directly on HR for results. Some = timeout.  results 16/27
function processData(input) {
  input = input.split("\n");
      let stack = [];

      for (let i = 1; i < input.length; i++) {
        if ( input[i][0] === "1") {
        let toadd = input[i].slice(2, input[i].length);
          stack.push(Number(toadd));
        } else if (input[i] === "2") {
          stack.pop();
        } else if (input[i] === "3") {
          console.log(Math.max(...stack));
        }
      }
}

processData("10 1 97 2 1 20 2 1 26 1 20 2 3 1 91 3"); // 26 91
