let arr = [1, 0, 2, 3, 0, 4, 0, 1];

function moveZero(arr) {
  k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      [arr[i], arr[k]] = [arr[k], arr[i]];
      k++;
    }
  }
}

moveZero(arr);
console.log(arr);
// temp = arr[i];
// arr[i] = arr[k];
// arr[k] = temp;
