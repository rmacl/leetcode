var maxNumberOfBalloons = function(text) {
    let map = { "b" : 0, "a" : 0, "l" : 0,  "o" : 0, "n" : 0};
    let result = Infinity;
    
    for(let index = 0; index < text.length; index++){
        let alphabet = text.charAt(index)
        if(map[alphabet] != undefined){
            map[alphabet] += 1;
        }
    }
    
    for(let key in map){
      let count = map[key];
      if(count == 0){
          return 0;
      }
      count = (key == "l" || key == "o") ? Math.floor(count/2) : count;
      result = Math.min(result, count);  
    }
    
    return result;
};
