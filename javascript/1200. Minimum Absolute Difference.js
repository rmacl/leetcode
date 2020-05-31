/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a-b);
    let minDiff = Infinity;
    let pairs = [];

    let set = new Set(arr);
    for(let index = 0; index < arr.length-1; index++){
        minDiff = Math.min(minDiff, Math.abs(arr[index+1]-arr[index]));
    }
    for(let index = 0; index < arr.length; index++){
        let number = arr[index];
        let diff = number + minDiff;
        if(set.has(diff) == true){
            pairs.push([number, diff]);
            continue;
        }
    }
    return pairs;
};
