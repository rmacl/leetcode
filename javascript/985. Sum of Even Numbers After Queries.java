class Solution {
    public int[] sumEvenAfterQueries(int[] A, int[][] queries) {
        int[] result = new int[queries.length];
        int sum = 0;
        
        for(int num:A){
            if(num%2 == 0){
                sum += num;
            }
        }
        for(int index =0; index < queries.length; index++){
            int prev = A[queries[index][1]];
            int current = queries[index][0];
            int temp = prev + current;
            
            if(prev%2 == 0){
                sum -= prev;
            }
            if(temp%2 == 0){
                sum += temp;
            }
            A[queries[index][1]] = temp;
            result[index] = sum;
        }
        
        return result;
    }
}
