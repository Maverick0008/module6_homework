function arrayTypeData(arr) {
    for(i = 0; i < arr.length; i++) {
      let num = arr[i];
      if(typeof num === 'number' && num % 2 === 0 && num != 0) {
        sumPar++
      }else if (typeof num === 'number' && num % 2 != 0 && num !=0) {
        sumOdd++
      }else if (typeof num === 'string') {
        str++
      }else if (typeof num === 'undefined') {
          undefinedNum++
      }else if (typeof num === 'boolean') {
        booleanType++
      }else if (typeof num === 'object') {
        nullNum++
      }
      else if (num == 0) {
        nul++
      }
    }
    console.log(`Четных: ${sumPar}, Нечетных: ${sumOdd}, Строки: ${str}, Ноль: ${nul}, Неопределен: ${undefinedNum}, Логический тип: ${booleanType}, Null: ${nullNum}`)
}