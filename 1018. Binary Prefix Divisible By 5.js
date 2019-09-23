var prefixesDivBy5 = function(A) {
    let result = [];
    let previous = 0;
    for(let index = 0; index < A.length; index++){
        previous = (2*previous + A[index])%5;
        if(previous%5 == 0){
            result.push(true);
            continue;
        }
        result.push(false);
    }
    return result;
};
