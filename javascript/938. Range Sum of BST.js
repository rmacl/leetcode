var rangeSumBST = function(root, L, R) {
    let result = 0;
    function helper(tree){
        if(tree == null){
            return;
        }
        if(tree.val < L){
            return helper(tree.right);
        }
        if(tree.val > R){
            return helper(tree.left);
        }
        result += tree.val;
        return helper(tree.right) || helper(tree.left);
    }
    helper(root);
    return result;
};
