class Solution {
    public int pivotIndex(int[] nums) {
        int sum = 0;
        int leftSum = 0;
        
        for(int number:nums){
            sum += number;
        }
        
        for(int index = 0; index < nums.length; index++){
            int diff = sum - nums[index];
            if(diff/2 == leftSum && diff%2 == 0){
                return index;
            }
            leftSum += nums[index];
        }
        return -1;
    }
}
