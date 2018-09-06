var binaryGap = function(N) {
    var aBinary = N.toString(2).split('');

    var iPrevious;
    var aDistance = [0];
    aBinary.forEach((iValue, iIndex)=>{

        if(iValue == 0){
            return false;
        }

       if(iPrevious == undefined){
            iPrevious = iIndex;
            return false;
        }

      aDistance.push(iIndex - iPrevious);
      iPrevious = iIndex;

    });
    return Math.max(...aDistance);
};
