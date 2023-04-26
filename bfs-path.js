function findNeighbors(node, matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let neighbors = [];
    let r = node[0];
    let c = node[1];
    if (r >= 1) {
        neighbors.push([r - 1, c]);
    }
    if (r <= (row - 2)) {
        neighbors.push([r + 1, c]);
    }
    if (c <= (col - 2)) {
        neighbors.push([r, c + 1]);
    }
    if (c >= 1) {
        neighbors.push([r, c - 1]);
    }
    // Your code here
    return neighbors;
}


function bfsPath(matrix, startNode, endValue) {
    // Returns a path with a single node if end value is located at start node
    if (matrix[startNode[0]][startNode[1]] === endValue) {
        return [startNode];
    }
    // dimensions of the matrix
    let row = matrix.length;
    let col = matrix[0].length;
    // Convert coordinate to linear address for set
    function convert(node) {
        let [r, c] = node;
        return r * row + c;
    }
    // data structures for the bfs
    let queue = [];
    let visited = new Set();
    let path = [];
    // initialize the bfs
    queue.push(startNode);
    visited.add(convert(startNode));
    path.push(startNode);
    // bfs main loop
    while (queue.length > 0) {
        let currNode = queue.shift();
        let neighbors = findNeighbors(currNode, matrix);
        for (let node of neighbors) {
            if (!visited.has(convert(node))) {
                // check if the node has the endValue.
                if (matrix[node[0]][node[1]] === endValue) {
                    path.push(node);
                    // return the path
                    return path;
                }
                // if not, push the node to the queue for bfs
                queue.push(node);
                visited.add(convert(node));
                path.push(node);
            }
        }
    }
    // if we did not find the endValue, return false
    return false;
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

const matrix1 = [
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

// // // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // // internal node (left, right, down, up)
// // // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];