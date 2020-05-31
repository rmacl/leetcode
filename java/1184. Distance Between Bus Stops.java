class Solution {
    public int distanceBetweenBusStops(int[] distance, int start, int destination) {
        
        if(start == destination){
            return 0;
        }
        if(start > destination){
            return distanceBetweenBusStops(distance, destination, start);
        }
        
        int sum = 0;
        int clockwise = 0;
        boolean isCount = false;
        for(int index = 0; index < distance.length; index++){
            sum += distance[index];
            if(index == start){
                isCount = true;
            }
            if(isCount == true){
                clockwise += distance[index];
                if(destination-1 == index){
                    isCount = false;
                    continue;
                }
            }
            
        }
        return Math.min(sum-clockwise, clockwise);
    }
}
