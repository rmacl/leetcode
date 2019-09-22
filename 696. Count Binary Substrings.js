var countBinarySubstrings = function(s) {
    let start = 0;
    let end = s.length-1;
    let index = 0;
    let count = 0;
    let isCount = false;
    
    
    while(start < end){
        if(s.charAt(start) != s.charAt(start+1)){
            index = start;
            isCount = true;
            count++;
        } else if(isCount == true && index >= 0 && s.charAt(index) == s.charAt(index-1)){
            count++;
            index--;
        } else{
            isCount = false;
        }
        start++;
    }
    return count;
};
