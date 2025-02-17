let arr = [1, 9, 11, 25, 25];

function checkIfSorted(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
}
console.log(checkIfSorted(arr));
