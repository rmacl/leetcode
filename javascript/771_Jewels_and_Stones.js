var numJewelsInStones = function(J, S) {
    
    var iCount = 0;
    
    if(J.length > 50 || S.length > 50){
        return false;
    }
    
    var aJewerly = J.split('');
    aJewerly.forEach(function(sJewerly){
        if(S.indexOf(sJewerly) <0){
            return iCount;
        }
    });
    
    var aStone = S.split('');
    aStone.forEach(function(sStone){
        if(aJewerly.includes(sStone) == true){
            iCount ++;
        }
    });
    return iCount;
};