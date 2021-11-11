const arr = [1,168,null,null,4,9,'4',true,1,false,6,-6,undefined,-0,0,10];
let sumOdd = 0;
let sumPar = 0;
let str = 0;
let undefinedNum = 0;
let nul = 0;
let booleanType = 0;
let nullNum = 0;
arrayTypeData(arr)
function isPrime (n) {
  if(n < 2 || n > 1000) {
    return "значение больше 1000";
  }for (i = 2; i <= n/2; i++) {
    if (n % i === 0) {
      return "число не простое";
    }else{
      return "число простое";
    }
  }
}
console.log(isPrime(5))