var numPrimeArrangements = function(n) {
    let modulo = 10**9 + 7;
  
    let prime = getPrimeCount(n);;
    let result = 1;

    for(let i = 2; i <= prime; i++){
        result = (result*i)%modulo;
    }
    for(let i = n-prime; i >= 2; i--){
        result = (result*i)%modulo;
    }
    return result%modulo;
};

function getPrimeCount(n){
    let numbers = new Array(n+1).fill(false);
    let prime = 0;
    for(let i = 2; i <= n; i++){
        if(numbers[i] == false){
            for(let j = 2*i; j <= n; j+=i){
                numbers[j] = true;
            }
        }
    }
    for(let i = 2; i <= n; i++){
        if(numbers[i] == false){
            prime++;
        }
    }
    return prime;
}
