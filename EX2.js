EX2

function range(a,b){
var n=0;
var j,k;
var cond;
var newarr=[]
for(i = a; i<=b; i++){
  if((i%10)%2===0){
   j=((i-i%10)/10)%10
    if(j%2===0){
    k=parseInt(((i-(i%10))/10)/10)
      if(k%2===0){
         cond = true 
          newarr[n] = i
            n++
      }
    }
  } 
}
if(cond!=true){
    return "Such numbers do not exist";
}
return newarr.join(" , ");
}
var getev = range(19,42); // 99,199
console.log(getev);