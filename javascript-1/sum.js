function sum(num) {
    let resultSum = num;
  
    function funcSum(n) {
        if (!n){         
            return resultSum;
        }
        resultSum += n;

      return funcSum;
    }

    return funcSum;
  }