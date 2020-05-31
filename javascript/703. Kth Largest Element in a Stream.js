var longestWord = function(words) {
    let wordSet = new Set(words);
    words.sort((word1, word2)=>{
        if(word1.length == word2.length){
            return word2.localeCompare(word1);
        }
        return word1.length - word2.length;
    });
    function helper (endIndex){
        
        let targetWord = words[endIndex];
        if(targetWord.length == 1){
            return targetWord;
        }
        for(let index = targetWord.length-1; index > 0; index--){
            let previousWord = targetWord.slice(0, index);
            if(wordSet.has(previousWord) == false){
                return helper(endIndex-1);
            }        
        }
        return targetWord;
    }
    return helper(words.length-1);    
};
