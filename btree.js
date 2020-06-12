var test = function (A) {
    let res = [];

    function flip(end) {
        if (end === 1) {
            return;
        }

        let index = 0;
        let max = A[ 0 ];

        for (let i = 1; i <= end; i++) {
            if (A[ i ] > max) {
                max = A[ i ];
                index = i;
            }
        }

        reverse(0, index);
        res.push(index + 1);

        reverse(0, end);
        res.push(end + 1);

        flip(end - 1);
    }

    function reverse(i, j) {
        while (i < j) {
            let tmp = A[ i ];
            A[ i ] = A[ j ];
            A[ j ] = tmp;

            i++;
            j--;
        }
    }

    flip(A.length - 1);

    return res;
};


console.log(test([ 3,2,4,1 ]))