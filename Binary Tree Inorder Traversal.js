//binary tree
/*Input: root = [1,null,2,3]

Given the root of a binary tree, return the inorder traversal of its nodes' values.
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
*/


var inorderTraversal = function(root) {
    let result = []
    let stack = []
    while(currentNode || stack.length){
        if(currentNode){
            stack.push(currentNode)
            currentNode = currentNode.left
        }
        else{
            currentNode = stack.pop()
            result.push(currentNode.val)
            currentNode = currentNode.right
        }

        }
        return result
    }
