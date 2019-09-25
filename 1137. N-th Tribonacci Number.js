var tribonacci = function(n) {
    if(n == 0){
        return 0;
    }
    return getTribonacci(n, 0, 1, 1);
};

function getTribonacci(n , prevPrev, prev, current){
    if(n < 3){
        return current;
    }
    return getTribonacci(n-1, prev, current,  prev + prevPrev + current);
}
