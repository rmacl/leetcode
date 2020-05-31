/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    const digit = 4;
    let time = -1;
    for(let i=0; i<digit; i++){
        for(let j=0; j<digit; j++){
            if(j!=i){
                for(let k=0; k<digit; k++){
                    if(k!=j && i!=k){
                        let l = 6-i-j-k;
                        let hour = 10*A[i] + A[j];
                        let minute = 10*A[k] + A[l];
                        if(hour < 24 && minute < 60){
                            time = Math.max(time, hour * 60 + minute);
                        }
                    }
                }
            }
        }
    }
    let hours = (Math.floor(time/60) < 10) ? "0" +Math.floor(time/60) : Math.floor(time/60); 
    let minutes = (time%60 < 10) ? "0"+ time%60 : time%60; 
    return time >=0 ? hours + ":" + minutes : "";
};
