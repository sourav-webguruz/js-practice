let arr = [3, 7, 8, 9, 10, 11];

// Brute Solution
function rotateByOne(arr) {
  let k = 3;
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
}
rotateByOne(arr);
console.log(arr);
