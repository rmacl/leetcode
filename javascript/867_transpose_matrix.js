/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {

    var iRow =  A[0].length;
    var aNewMatrix = new Array(iRow);
    var iALength = A.length;

    for(var i=0; i<iRow; i++){
        aNewMatrix[i] = new Array(iALength);
        for(var j=0; j<iALength; j++){
            aNewMatrix[i][j] = A[j][i];
        }
    }

    return aNewMatrix;
};
