var sumEvenAfterQueries = function(A, queries) {
    let sum = 0;
    let result = [];
    A.forEach((val) => {if(val%2 == 0){
        sum += val;
    }});
    queries.forEach((row) => {
        
       let prev = A[row[1]];
       let current = row[0];
       let temp = prev + current;
        
       if(prev%2 == 0){
           sum -= prev;
       }
       if(temp%2 == 0){
           sum += temp;
       }
       A[row[1]] = temp;        
       result.push(sum);
    });
    return result;
};
