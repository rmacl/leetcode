class Solution {
    
    public int minDeletionSize(String[] A) {
        int length = A[0].length();
        int result = 0;
        for(int i = 0; i < length; i++){
            for(int j = 0; j < A.length-1; j++){
                if(A[j].charAt(i) - A[j+1].charAt(i) > 0){
                    result++;
                    break;
                }
            }
        }
        return result;
    }
}
