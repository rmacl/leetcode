class Solution {
    public int numPrimeArrangements(int n) {
        long result = 1;
        int prime = countPrimeNumber(n);
        int mod = (int)(1e9 + 7);
        for(int i = 2; i <= prime; i++){
            result = (result*i)%mod;
        }
        for(int i = n-prime; i >= 2; i--){
            result = (result*i)%mod;
        }
        
        return (int)result;
    }
    
    
    private int countPrimeNumber(int n){
        int count = 0;
        int[] numbers = new int[n+1];
        
        for(int i = 2; i <= n; i++){
            if(numbers[i] == 0){
                for(int j = i*2; j <= n; j += i){
                    numbers[j]++;
                }
            }
        }
        
        for(int i = 2; i <= n; i++){
            if(numbers[i] == 0){
                count++;
            }
        }
        return count;
    }
}
