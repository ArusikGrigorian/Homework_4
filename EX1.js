EX1

function getarr(arr, b){
  var newarr = [];
  var j = 0;
  for(i=0; i<arr.length; i++){       
    if(arr[i]>b){
          newarr[j] = arr[i]
          j++
    }
  }
    if (newarr.length === 0){
    return ("Such values do not exist");
    }
    return newarr;
}
var getnewarr = getarr([10, 25, 16, -5, 30, 15, 24],16); // [1, 1, 2, -3, 0, 8, 4, 0], 9
console.log(getnewarr);

