var diStringMatch = function(S) {
    let increase = 0;
    let length = S.length;
    let decrease = length;
    
    let result = [];
    
    for(let index = 0; index <= length; index++){
        let indicator = S.charAt(index);
        let num = (indicator == "D") ? decrease-- : increase++;
        result[index] = num;
    }
    
    return result;
};
