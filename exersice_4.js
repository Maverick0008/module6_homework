
let numEnterOne = prompt('Введите значение 1: ')
let numEnterTwho = prompt('Введите значение 2: ')
const showNumber = (numOne,oneTwo) => {
  console.log(numOne);
  if(numOne <= oneTwo - 1) {
    setTimeout(showNumber, 1000, ++numOne, oneTwo++)
  }  
}
setTimeout(showNumber, 1000, numEnterOne, numEnterTwho);