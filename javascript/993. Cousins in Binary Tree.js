/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    //deapth of x and y should be the same
    //their parents should not be the same
    let parents = [];
    let depths = [];
    function traverseTree(tree, depth, parent){
        if(tree == null){
            return;
        }
        if(tree.val == x || tree.val == y){
            parents.push(parent);
            depths.push(depth);
        }
        return traverseTree(tree.right, depth+1, tree.val) || traverseTree(tree.left, depth+1, tree.val);
        
    }
    traverseTree(root, 0, root.val);
    return (parents[0] != parents[1]) && (depths[0] == depths[1]);
};
