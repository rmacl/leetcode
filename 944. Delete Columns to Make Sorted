var minDeletionSize = function(A) {
    let length = A[0].length;
    let result = 0;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < A.length-1; j++){
            if(A[j].charCodeAt(i) - A[j+1].charCodeAt(i) >  0){
                result++;
                break;
            }
        }
    }
    return result;
};
