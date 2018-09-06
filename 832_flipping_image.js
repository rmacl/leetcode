
var flipAndInvertImage = function(A) {
    if(1 > A.length || A.length != A[0].length || A.length > 20){
        return false;
    }
    A.forEach(function(aRow){
        aRow.reverse();
        aRow.forEach(function(iRow, iIndex){
            if(iRow == 0){
                aRow[iIndex] = 1;
            }else if(iRow ==1){
                aRow[iIndex] = 0;
            }
        });
    });
    return A;
};
