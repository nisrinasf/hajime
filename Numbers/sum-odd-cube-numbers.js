function cubeOdd(arr) {
    return arr.every(num => Number.isInteger(num) ) 
    ? arr.filter(num => parseInt(num % 2))
         .reduce((acc, curr) => acc + Math.pow(curr, 3), 0) 
    : undefined
}

console.log(cubeOdd([1, 2, 3, 4])) // 28);
console.log(cubeOdd([1, 2, 3, 4, 1])) // 29);
console.log(cubeOdd([3, 5, 7])) // 29);
console.log(cubeOdd([-3,-2,2,3])) // 0);

console.log(cubeOdd(["a",12,9,"z",42])) // undefined);

