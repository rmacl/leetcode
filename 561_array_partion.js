var arrayPairSum = function(nums) {
    var iResult = 0;
    nums.sort((a,b)=> a-b);
    nums.forEach((iValue, iIndex)=>{
        if(iIndex % 2 == 0){
        iResult += iValue;
        }
    });
    return iResult;
};
