EX5

function getwrongindex(arr){
var sorting;
for(i=0; i<arr.length; i++) {
  if (arr[i]>arr[i+1]){
    sorting=false;
    return i+1;
  }
}
  if (sorting=true){
    return -1;
  }
}
var compareindex=getwrongindex([2, 12, 15, 48, 64]); // [-9, -4, -4, 3, 12, 4, 5]
console.log(compareindex);
