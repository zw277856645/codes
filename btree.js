function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function search(root) {
    if (root == null) {
        return;
    }


    search(root.left);
    console.log(root.val)
    search(root.right);
}

var recoverTree = function (root) {
    let x, y, prev;

    function recover(root) {
        if (root == null) {
            return null;
        }

        recoverTree(root.left);

        if (!prev) {
            prev = root;
        } else {
            if (prev.val > root.val) {
                if (!x) {
                    x = prev;
                }

                y = root;
            }

            prev = root;
        }

        recoverTree(root.right);
    }

    recover(root);

    if (x != null && y != null) {
        let tmp = x.val;
        x.val = y.val;
        y.val = tmp;
    }
};


console.log(recoverTree(
    [ 1, 2, 4, 5, 3, 6, 7 ],
    [ 4, 5, 2, 6, 7, 3, 1 ]
))