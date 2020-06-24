function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function Node(fir, sec) {
    this.fir = fir;
    this.sec = sec;
}


var stoneGame = function (nums) {

};

class KMP {

    constructor(pattern) {
        if (!pattern) {
            return;
        }

        this.pattern = pattern;

        let n = pattern.length;

        this.dp = {};

        let x = 0;

        for (let s = 0; s < n; s++) {
            if (dp[pattern[s].charCodeAt(0)]) {

            }
        }
    }

    search(text) {
        if (!thi)
    }
}

console.log(isMatch('letcte', [ 'let', 'cte' ]))
