var numberOfLines = function(widths, S) {
    var oAlphabetWidth = mapNumberToWidth(widths);
    var aString = S.split('');
    var iLineCount = 1;
    var iWordLength = 0;
    var aResult = [];

    aString.forEach((sWord, iIndex)=>{
        var iAlphabetWidth = oAlphabetWidth[sWord];
        iWordLength += iAlphabetWidth;

        if(iWordLength > 100){
            iLineCount ++;
            iWordLength = iAlphabetWidth;
            return false;
        }

    });
    aResult.push(iLineCount, iWordLength);
    return aResult;
};

var mapNumberToWidth = function(widths){
    var oAlphabetWidth = {}
    var aAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    aAlphabet.forEach((iValue, iIndex)=>{
        oAlphabetWidth[iValue] = widths[iIndex];
    });
    return oAlphabetWidth;
}
