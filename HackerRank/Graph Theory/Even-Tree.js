//First Test passed, the rest is a time out. Optimize the code now... 

function evenTree(n, m, tree) {
  //Create an arr with the main branches of the initial big tree (forest)
  let treeCopy = tree;
  let subTrees = [];
  let removedEdges = 0;

  for (let i = 0; i < treeCopy.length;) {
    if (treeCopy[i][1] === 1) {
      subTrees.push([treeCopy[i]]);
      treeCopy.splice(i, 1);
    } else {
      i++;
    }
  }

  function detectSubTrees() {
    //main branches and root
    if (treeCopy.length !== 0) {
      // console.log(treeCopy.length);
      for (let i = 0; i < treeCopy.length; i++) { //loop through each edge
        for (let j = 0; j < subTrees.length; j++) { //loop through each branch
          // console.log(treeCopy);
          if (treeCopy[i][1] === subTrees[j][subTrees[j].length - 1][0] || treeCopy[i][1] === subTrees[j][subTrees[j].length - 1][1]) { //SOMETHING TO FIX HERE <=====
            subTrees[j].push(treeCopy[i]);
            // console.log(subTrees);
            treeCopy.splice(i, 1);
          }
        }
      }
    }

    if (treeCopy.length !== 0) {
      return detectSubTrees();
    }
  }

  detectSubTrees();
  console.log(subTrees[1]);

  function simulateCut(branch) {
    let branchVertices = [];
    subTrees[branch].forEach((x, index) => {
      if (index !== 0) {
        for (let i = 0; i < subTrees[branch][index].length; i++) {
          console.log(branchVertices.indexOf(subTrees[branch][index][i]));
          if (branchVertices.length === 0 || branchVertices.indexOf(subTrees[branch][index][i]) === -1) {
            branchVertices.push(subTrees[branch][index][i]);
          }
        }
      }
    });

    if (branchVertices.length % 2 === 0) {
      //cut the first branch from the root
      removedEdges++;
      console.log(subTrees[branch][0]); // We print the edge we cut out.
      console.log(subTrees);
    }
    console.log(branchVertices);
  }

  //for Each branch going from root, we check if we can cut it or not.
  for (let b = 0; b < subTrees.length; b++) {
    simulateCut(b);
  }

  console.log(removedEdges);

}

evenTree(10,9,[
  [2, 1],
  [3, 1],
  [4, 3],
  [5, 2],
  [6, 1],
  [7, 2],
  [8, 6],
  [9, 8],
  [10, 8]
]);

// main branches from root
// [
//   [ [2, 1],[5, 2],[7, 2] ]
//   [ [3, 1],[4, 3] ]
//   [ [6, 1],[8, 6],[9, 8],[10, 8] ]
// ]
//
// // track of nodes/tree
// [ [2, 1],[[5, 2],[7, 2]] ] //4
// [ [3, 1],[4, 3] ] //3
// [ [6, 1],[8, 6],[[9, 8],[10, 8]] ]//5
// // possibilties
// [2, 1],
// [3, 1],
// [4, 3],
// [5, 2],
// [6, 1],
// [7, 2],
// [8, 6],
// [9, 8],
// [10, 8]  less unique values
//
// ==>
// [2, 1],
// [3, 1],
// [4, 3],
// [6, 1],
// [8, 6],
