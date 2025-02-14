let arr = [10, 3, 2, 8, 4, 9, 110, 2, 34];
let max = 0;
let secMax = 0;
let thirdMax = 0;

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    secMax = max;
    max = arr[i];
  } else {
    secMax = Math.max(secMax, arr[i]);
  }
}

console.log([max, secMax]);
