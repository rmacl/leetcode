class Solution {
    int[] result;
    public int[] diStringMatch(String S) {
        int length = S.length();
        result = new int[length+1];
        int increase = 0;
        int decrease = length;
        
        for(int index = 0; index < length; index++){
            int num = (S.charAt(index) == 'D') ? decrease-- : increase++;
            result[index] = num;
        }
        result[length] = increase;
        return result;
    }
}
