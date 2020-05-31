var numPairsDivisibleBy60 = function(time) {
    let count = 0;
    let remainders = new Array(60).fill(0);
    time.forEach((duration) => {
        let remainder = duration%60;
        let compare = (remainder == 0) ? 0 : 60-remainder;
        if(remainders[compare] > 0){
            count += remainders[compare];
        }
        remainders[remainder]++;
    })
    return count;
};
