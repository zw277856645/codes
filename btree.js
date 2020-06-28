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
        this.pattern = pattern;

        if (!pattern) {
            return;
        }

        this.dp = {};

        let x = 0;

        for (let s = 0; s < pattern.length; s++) {
            if (dp[pattern[s].charCodeAt(0)] === ) {

            }
        }
    }

    search(text) {
        if (!this.pattern) {
            return -1;
        }
    }
}

console.log(isMatch('letcte', [ 'let', 'cte' ]))
