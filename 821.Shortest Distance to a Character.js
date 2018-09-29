var shortestToChar = function(S, C) {
    var aWord = S.split('');
    var aResult = [];
    var aCharacterIndex = []; 
    var aTempResult = [];
    aWord.map((iValue, iIndex)=> {
        if(C == iValue)               
        {aCharacterIndex.push(iIndex);
        }});
    
    aWord.forEach((sString, iIndex)=>{
        if(iIndex <=aCharacterIndex[0]){
            aResult[iIndex] = aCharacterIndex[0] - iIndex;
            return false;
            }
        aTempResult  = aCharacterIndex.map((iLocation)=>{
                   
                    return Math.abs(iIndex-iLocation)});
    aResult[iIndex] = Math.min(...aTempResult);
    }); 
    return aResult;
};