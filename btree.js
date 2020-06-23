function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var Solution = function (nums) {
    this.nums = nums;
};

Solution.prototype.pick = function (target) {
    let index, count = 0;

    for (let i = 0; i < this.nums.length) {
        if (this.nums[ i ] === target) {
            count++;

            if (Number.parseInt(Math.random() * count) === 0) {
                index = i;
            }
        }
    }

    return index;
};
