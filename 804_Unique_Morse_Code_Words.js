const aMorseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
const aAlphabet = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var uniqueMorseRepresentations = function(words) {
         var aMorseCodeResult = [];
    if(words.length > 100){
        return false;
    }
    
    var oMappingCode = mapMorseCode();
    words.forEach(function(sWords){
        if(1 > sWords.length || sWords.length >12 ){
            return false;
        }
        if(sWords === sWords.toUpperCase()){
            return false;
        }
        
       
        var aWord = sWords.split('');
        var sMorseCodeResult = '';
        aWord.forEach(function(sWord){
            sMorseCodeResult += oMappingCode[sWord];
  
        });
        aMorseCodeResult.push(sMorseCodeResult);
        
    });
        var aUniqueMorseCode = new Set(aMorseCodeResult);
        return aUniqueMorseCode.size;
    
};

var mapMorseCode = function(){   
var oMorseCodeMap = {};

aAlphabet.forEach((key, i) => oMorseCodeMap[key] = aMorseCode[i]);
    return oMorseCodeMap;
}