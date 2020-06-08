var test = function (s) {
    if (s.length < 2) {
        return s;
    }

    let dp = new Array(s.length);
    for (let i = 0; i < dp.length; i++) {
        dp[ i ] = new Array(s.length);
    }

    let start = 0, maxLen = 1;

    for (let j = 1; j < s.length; j++) {
        for (let i = 0; i < j; i++) {
            if (s[ i ] !== s[ j ]) {
                dp[ i ][ j ] = false;
            } else {
                if (j - i < 3) {
                    dp[ i ][ j ] = true;
                } else {
                    dp[ i ][ j ] = dp[ i + 1 ][ j - 1 ];
                }
            }

            if (dp[ i ][ j ] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                start = i;
            }
        }
    }

    return s.substr(start, maxLen);
};

console.log(test("abcda"))