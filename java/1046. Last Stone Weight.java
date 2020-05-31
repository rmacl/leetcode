class Solution {
    public int lastStoneWeight(int[] stones) {
        
        int result = 0;
        Queue<Integer> maxHeap = new PriorityQueue<Integer>(Collections.reverseOrder());
        for(int weight:stones){
            maxHeap.offer(weight);
        }
        while(maxHeap.size()  != 0){
            if(maxHeap.size() == 1){
                result = maxHeap.poll();
                return result;
            }
            int first = maxHeap.poll();
            int second = maxHeap.poll();
            int diff = first - second;
            if(diff != 0){
                maxHeap.offer(diff);
            }
            
        }
        
        return result;
    }
}
