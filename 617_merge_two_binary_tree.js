var mergeTrees = function(t1, t2) {

    var aBiggerTree = t2;
    var aSmallerTree = t1;

    if(t1.length >= t2.length){
        aBiggerTree = t1;
        aSmallerTree = t2;
    }

    var aNewTree = [];
    aNewTree.length = aBiggerTree.length;

    aBiggerTree.forEach((iNode, iIndex)=>{
        if(iIndex <= aSmallerTree.length){
        // if(iNode == null){
        //     aNewTree[iIndex] = aSmallerTree[iIndex];
        // } else{
        aNewTree[iIndex] = iNode + aSmallerTree[iIndex];
    } else {
        aNewTree[index] = iNode;
    }
    });
    console.log(aNewTree);
};
