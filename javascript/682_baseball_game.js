var calPoints = function(ops) {
    var iPoint = 0;
    var aValid = [];
    ops.forEach((mPoint, iIndex)=>{
        var iLastPointIndex = aValid.length -1;

        if(mPoint == 'C'){
            iPoint -= aValid.pop();
         return false;
        }

        if(mPoint == 'D'){
            var iDoubledpoint = aValid[iLastPointIndex] *2;
            aValid.push(iDoubledpoint);
            iPoint += iDoubledpoint;
            return false;

        }
        if(mPoint == '+'){
            iFirstLastIndex = iLastPointIndex -1;
            var iPlus = parseInt(aValid[iLastPointIndex],10) + parseInt(aValid[iFirstLastIndex],10);
            aValid.push(iPlus);
            iPoint += iPlus;

            return false;
        }
        aValid.push(mPoint);
        iPoint += parseInt(mPoint,10);

    });
    return iPoint;

};
