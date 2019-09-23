class Solution {
    
    public List<Boolean> prefixesDivBy5(int[] A) {
        List<Boolean> result = new ArrayList();
        int previous = 0;
        for(int index = 0; index < A.length; index++){
            previous = (previous*2 + A[index])%5;
            if(previous % 5 == 0){
                result.add(true);
                continue;
            }
            result.add(false);
        }
        return result;
    }
}
