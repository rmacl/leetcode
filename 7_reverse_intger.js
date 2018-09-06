var reverse = function(x) {

    var sResult  = (x<0) ? ('-' +(x*-1).toString().split('').reverse().join('')) : x.toString().split('').reverse().join('');
    var iResult = parseInt(sResult, 10);
     var iMaxNumber = Math.pow(2, 31);
    if (iResult > iMaxNumber - 1) {
      return 0
    }
    if (iResult < -1 * iMaxNumber) {
      return 0
    }
    return iResult ;
};
