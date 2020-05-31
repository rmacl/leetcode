class Solution {
    public int tribonacci(int n) {
        if(n == 0){
            return 0;
        }
        return getTribonacci(n, 0, 1, 1);
    }
    private int getTribonacci(int n, int prePrev, int prev, int current){
        if(n < 3){
            return current;
        }
        return getTribonacci(n-1, prev, current, prev+current+prePrev);
    }
}
