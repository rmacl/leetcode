var addToArrayForm = function(A, K) {
    K = K + "";
    let lengthA = A.length;
    let lengthK = K.length;
    let result = [];
    
    if(lengthA > lengthK){
        K = K.padStart(lengthA, '0');
    }
    
    let carry = 0;
    for(let index = K.length-1; index >= 0; index--){
        
        let smallIndex = index - (K.length - A.length);
        let element = (A[smallIndex]) ? parseInt(A[smallIndex],10) : 0;
        let sum = carry + element  + parseInt(K.charAt(index),10);
        carry = Math.floor(sum/10);
        result.unshift(sum%10);     
    }
    if(carry == 1){
        result.unshift(carry);
    }
    return result;
};
