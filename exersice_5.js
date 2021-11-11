const powNum = (x,n) => {
    let result = 1;
    for (i = 1; i <=n; i++) {
      result *= x;
    }
    return result;
  }
  console.log(powNum(2,5))