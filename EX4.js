EX4

function getminposit(arr){
  var min=arr[0];
  /*if(arr[0]<0 && arr[0]<arr[1] && arr[1]>=0){
      arr[0]=arr[1];
    }
   */
    if(arr[0]>arr[1] && arr[1]<0 || arr[0]<arr[1] && arr[1]>=0){
      arr[1]=arr[0];
    }
  var removed = arr.splice(0,1);
    if(arr.length!==0){
      return getminposit(arr);
    }
    if(min>=0) {
      return min;
    } 
    else {
      return -1;
    }
}
console.log(getminposit([56, -9, 87, -23, 0, -105, 55, 1])); // [45, -9, 15, 5, -78] , [-5, -9, -111, -1000, -7] 

/*for the condition, where we have an array, 
which begins with negative element, for example:  
[-9, ...]*/



/*
function getminposit(arr){
  var min=arr[0];
    if(arr[0]>arr[1] && arr[1]<0){
      arr[1]=arr[0];
    }
    if(arr[0]<arr[1] && arr[1]>0){
      arr[1]=arr[0];
    }
  var removed = arr.splice(0,1);
    if(arr.length!==0){
      return getminposit(arr);
    }
    if(min>=0) {
      return min;
    } 
    else if(min<0){
      return -1;
    }
}
console.log(getminposit([56, -9, 87, -23, 0, -105, 55, 1])); // [45, -9, 15, 5, -78] , [-5, -9, -111, -1000, -7]
*/


