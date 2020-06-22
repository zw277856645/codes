function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var test = function (heights) {
    let stack = [  ];
    let max = 0, i = 0;

    while (i < heights.length) {
        if (!stack.length || heights[ i ] >= heights[ stack.length - 1 ]) {
            stack.push(i);
            i++
        } else {
            let k = stack.pop();
            if (stack.length) {
                console.log(i - stack[ stack.length - 1 ] - 1)
                console.log(heights[ k ])
                max = Math.max(max, heights[ k ] * (i - stack[ stack.length - 1 ] - 1));
            } else {
                console.log(heights[ k ])
                max = Math.max(max, heights[ k ] * i);
            }
        }
    }

    console.log(stack)

    while (stack.length) {
        let k = stack.pop();
        if (stack.length) {
            console.log(i - stack[ stack.length - 1 ] - 1)
            console.log(heights[ k ])
            max = Math.max(max, heights[ k ] * (i - stack[ stack.length - 1 ] - 1));
        } else {
            console.log(heights[ k ])
            max = Math.max(max, heights[ k ] * i);
        }
    }

    return max;
};

console.log(test([ 2, 1, 2 ]))