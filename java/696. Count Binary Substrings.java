class Solution {
    public int countBinarySubstrings(String s) {
        int count = 0;
        int backwardIndex = 0;
        boolean isCount = false;
        
        for(int i = 0; i < s.length()-1; i++){
            if(s.charAt(i) != s.charAt(i+1)){
                isCount = true;
                backwardIndex = i;
                count++;
                continue;
            }
            if(isCount == true && backwardIndex > 0 && s.charAt(backwardIndex) == s.charAt(backwardIndex-1)){
                count++;
                backwardIndex --;
                continue;
            }
            isCount = false;
        }
        
        return count;
    }
}
