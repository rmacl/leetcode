var findWords = function(words) {
    var aKeyboard = [['q','w','e','r','t','y','u','i','o','p'],
                     ['a','s','d','f','g','h','j','k','l'],
                     ['z','x','c','v','b','n','m']];
    var aResult = [];
    
    words.forEach((sWord)=>{
        aWord = sWord.toLowerCase().split('');
        var bFlag = false;
        aKeyboard.forEach((aKeyboardRow)=>{           
            bFlag = aWord.some((sEachWord)=>{
                return aKeyboardRow.indexOf(sEachWord) == -1;
            });
           if(bFlag == false){
               aResult.push(sWord);
           }
        }); 
    });
    return aResult;
};
