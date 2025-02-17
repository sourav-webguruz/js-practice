let arr = [4,8,2,6,9];

// Optimize Solution (Reverse algorithm)
function rotateByK(arr) {
  let k = 3;
  n = arr.length - 1;
  rev(0, k - 1, arr);
  rev(k, n ,arr);
  rev(0, n ,arr);
}

function rev(s, e, arr) {
  while (s < e) {
    temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;

    s++;
    e--;
  }
}
rotateByK(arr);
console.log(arr);
