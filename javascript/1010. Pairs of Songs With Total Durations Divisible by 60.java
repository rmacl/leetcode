class Solution {
    public int numPairsDivisibleBy60(int[] time) {
        int count = 0;
        int[] remainders = new int[60];
        for(int duration:time){
            int remainder = duration%60;
            int comapre = (remainder == 0) ? 0 : 60-remainder;
            if(remainders[comapre] > 0){
                count += remainders[comapre];
            }
            remainders[remainder]++;
        }
        
        return count;
    }
}
