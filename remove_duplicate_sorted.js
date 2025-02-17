let arr = [1, 1, 2, 2, 2, 3, 3];

//Brute Force Can be Done Using Set Data Structure
function removeDuplicateBF(arr){
  let set = new Set(arr);
  let unique = Array.from(set);
  return unique;
}



// Optimal Solution
function removeDuplicate(arr) {
    let k = 0;
    for (let i = 1; i < arr.length; i++) {
        if(arr[k]!=arr[i]){
            k++;
            arr[k]= arr[i];
        }
    }
}
removeDuplicate(arr);
console.log(arr);