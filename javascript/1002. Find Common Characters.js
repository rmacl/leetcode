/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let count = new Array(26).fill(0);
    let result = [];
    
    for(let i = 0; i < A.length; i++){
        let word = A[i];
        let temp = new Array(26).fill(0);
        for(let j = 0; j< word.length; j++){
            if(i == 0){
                count[word.charCodeAt(j)-97]++;
                continue;
            }
            temp[word.charCodeAt(j)-97]++;
            if(j == word.length-1){
                 for(let k=0; k<26; k++){
                    count[k] = Math.min(temp[k], count[k]);
                }
            }
        }
     
    }
    for(let i = 0; i < 26; i++){
        if(count[i] > 0){
             for(let j = 0; j < count[i]; j++){
                let char = String.fromCharCode(i+97);
                result.push(char);
             }
         }
    }
    return result;
};
