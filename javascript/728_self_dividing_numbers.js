var selfDividingNumbers = function(left, right) {
    var aResult = [];

    for(var iNumber = left; iNumber <= right; iNumber++){
        if(iNumber < 10){
            aResult.push(iNumber);
            continue;
        }
        var sNumber = iNumber.toString();
        if(sNumber.includes('0')){
            continue;
        }
        var aNumber = sNumber.split('');
        var bDividable = checkDividable(aNumber, iNumber);

        if(bDividable == true){
            aResult.push(iNumber);
        }

    }
    return aResult;
};

var checkDividable = function(aNumber, iNumber){
      var bDividable = true;
      for(var iDigit = 0; iDigit < aNumber.length; iDigit++){
            if(iNumber % (parseInt(aNumber[iDigit])) != 0){
                bDividable = false;
                break;
            }
        }
    return bDividable
};
