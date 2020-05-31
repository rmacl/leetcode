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
    int result;
        
    public int rangeSumBST(TreeNode root, int L, int R) {
        result = 0;
        traverseTree(root, L, R);
        return result;
    }
    
    private void traverseTree(TreeNode root, int L, int R){
        if(root != null){

            if(L <= root.val && R >= root.val){
                 result += root.val;
            }
            if(root.val > L){
                 traverseTree(root.left, L, R);
            }
            if(root.val < R){
                 traverseTree(root.right, L, R);
            }

        }
    }
    
}
