var RecentCounter = function() {
    this.calls = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    
    let diff = (t-3000 >= 0) ? t-3000 : 0;
    let length = this.calls.length;
    
    let start = 0;
    let end = length-1;
    while(start <= end){
        let middle = Math.floor((start+end) /2);
    
        if(diff > this.calls[middle]){
             start = middle+1;
             continue;
        }
        end = middle-1;
      
    }
    this.calls.push(t);
    this.calls.splice(0, start);
    return this.calls.length;
};
