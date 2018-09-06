var hammingDistance = function(x, y) {
    var aX = convertToArray(x);
    var aY = convertToArray(y);
    var iCount = 0;
    var aBiggerNumber;
    var aSmallerNumber;
    var iXlength = aX.length;
    var iYlength = aY.length;
    var iGap;

    if(iXlength == iYlength){
        aX.forEach(function(iX, iIndex){
            if(aY[iIndex] != iX){
                iCount ++;
            }
        });
        return iCount;
    }

    if(iXlength > iYlength){
        aBiggerNumber = aX;
        aSmallerNumber = aY;
    }else if(iXlength < iYlength){
        aBiggerNumber = aY;
        aSmallerNumber = aX;
    }

    iGap = aBiggerNumber.length - aSmallerNumber.length;
    aBiggerNumber.forEach(function(iValue, iIndex){
        if(iIndex < iGap){
            if(iValue == 1){
                iCount++;
            }
        }else{
            var iNewIndex = iIndex - iGap;
            if(iValue != aSmallerNumber[iNewIndex]){
                iCount++;
            }
        }

    });

    return iCount;

};

var convertToArray = function(x){
    return x.toString(2).split('');
};
