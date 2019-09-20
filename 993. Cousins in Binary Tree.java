/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    Set <Integer> parents;
    Set <Integer> depths;
    
    public boolean isCousins(TreeNode root, int x, int y) {
        parents = new HashSet();
        depths = new HashSet();
        traverseTree(root, x, y, root.val, 0);
        if(parents.size() != 1 && depths.size() == 1){
            return true;
        }
        return false;
    }
    
    private void traverseTree(TreeNode tree, int x, int y, int parent, int depth) {
        if(tree == null){
            return;
        }
        if(x == tree.val || y == tree.val){
            parents.add(parent);
            depths.add(depth);
        }
        traverseTree(tree.right, x, y, tree.val, depth+1);
        traverseTree(tree.left, x, y, tree.val, depth+1);
    }
}
