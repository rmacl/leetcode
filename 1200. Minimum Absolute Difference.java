class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        Arrays.sort(arr);
        List<List<Integer>> pairs = new LinkedList();
        int minDiff = Integer.MAX_VALUE;

        
        
        for(int index = 1; index < arr.length; index++){
            minDiff = Math.min(minDiff, arr[index]-arr[index-1]);
        }
        
        for(int index = 1; index < arr.length; index++){
            int diff = arr[index] - arr[index-1];
            if(diff == minDiff){
                List pair = new LinkedList();
                pair.add(arr[index-1]);
                pair.add(arr[index]);
                pairs.add(pair);
                
            }
        }
        return pairs;
    }
}
