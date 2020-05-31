/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  
    if(nums.length == 0){
        return -1;
    }
    let sum = nums.reduce((sum, number) => sum+number);
    let leftSum = 0;
    for(let index = 0; index < nums.length; index++){
        if((sum - nums[index])/2 == leftSum){
            return index;
        }
        leftSum += nums[index];
    }
    return -1;
};
