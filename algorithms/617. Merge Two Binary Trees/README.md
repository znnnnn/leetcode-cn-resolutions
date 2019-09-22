### [617\. 合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/)

Difficulty: **简单**

给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。</p>

<p>你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则<strong>不为&amp;nbsp;</strong>NULL 的节点将直接作为新二叉树的节点。</p>

<p>

给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则**不为 **NULL 的节点将直接作为新二叉树的节点。

**示例 1:**

```
输入:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
输出:
合并后的树:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
```

**注意:** 合并必须从两个树的根节点开始。

<strong>示例&amp;nbsp;1:</strong></p>

```

<strong>输入:</strong>
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
<strong>输出:</strong>
合并后的树:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
```

<p><strong>注意:</strong>&amp;nbsp;合并必须从两个树的根节点开始。</p>
" class="notranslate" style="display: block;">

#### Solution

Language: **JavaScript**

```javascript
var mergeTrees = function(t1, t2) {
    if(t1&&t2){
        var t=new TreeNode(t1.val+t2.val)
        t.left=mergeTrees(t1.left, t2.left)
        t.right=mergeTrees(t1.right, t2.right)
        return t
    }
    else if(!t1&&t2){
        return t2
    }
    else if(!t2&&t1){
        return t1
    }
    return null
};
```