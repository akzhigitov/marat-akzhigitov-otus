function sum(num) {
    let resultSum = num;
  
    function funcSum(n) {
        if (n === undefined){         
            return resultSum;
        }
        resultSum += n;

      return funcSum;
    }

    return funcSum;
  }
