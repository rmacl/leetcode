var removeDuplicates = function(S) {
    let result = [S.charAt(0)];
    for(let index = 1; index < S.length; index++){
        let length = result.length;
        let char = S.charAt(index);
        if(result[length-1] == char){
            result.pop();
            continue;
        }
        result.push(char);
    }
    return result.join('');
};
