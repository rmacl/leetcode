var distanceBetweenBusStops = function(distance, start, destination) {
    if(start == destination){
        return 0;    
    }
    if(start > destination){
        return distanceBetweenBusStops(distance, destination, start);
    }
    
    let sum = 0;
    let clockwise = 0;
    let isCount = false;
    
    for(let i = 0; i < distance.length; i++){
        sum+=distance[i];
        if(i == start){
            isCount = true;
        }
        if(isCount == true){
            clockwise += distance[i];
            if(i == destination-1){
                isCount = false;
            }
            continue;
        }
        
    }
    return Math.min(sum-clockwise, clockwise);
};
