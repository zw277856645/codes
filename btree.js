function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function (preorder, inorder) {
    if (preorder.length <= 0 || inorder.length <= 0) {
        return null;
    }

    let root = new TreeNode(preorder[ 0 ]);
    let mid = inorder.indexOf(root.val);

    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

    return root;
};

var buildTreeBack = function (backorder, inorder) {
    if (backorder.length <= 0 || inorder.length <= 0) {
        return null;
    }

    let root = new TreeNode(backorder[ backorder.length - 1 ]);
    let mid = inorder.indexOf(root.val);

    root.left = buildTreeBack(backorder.slice(0, mid), inorder.slice(0, mid));
    root.right = buildTreeBack(backorder.slice(mid, -1), inorder.slice(mid + 1));

    return root;
};

function search(root) {
    if (root == null) {
        return;
    }

    console.log(root.val)
    search(root.left);
    search(root.right);
}


console.log(search(buildTreeBack(
    [ 9, 15, 7, 20, 3 ],
    [ 9, 3, 15, 20, 7 ]
)))