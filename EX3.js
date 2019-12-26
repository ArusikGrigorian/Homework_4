EX3

function getodd(a){
var b = a%10;
  if(b%2===0){
    return "False";
  }
var c = ((a-b)/10);
  if (c!=0){
    return getodd(c);
  }
    return "True";
}
var getallodd = getodd(4211133); // 7791, 5 
console.log(getallodd);
