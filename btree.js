function test(grid) {
    let m = grid.length;
    let n = grid[ 0 ].length;
    let stack = [];
    let goods = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[ i ][ j ] === 2) {
                stack.push([ i, j ]);
            } else if (grid[ i ][ j ] === 1) {
                goods++;
            }
        }
    }

    if ((!stack.length && goods) || goods === m * n) {
        return -1;
    }
    if (stack.length === m * n) {
        return 0;
    }

    let moves = [ [ -1, 0 ], [ 1, 0 ], [ 0, -1 ], [ 0, 1 ] ];
    let min = -1;

    while (stack.length) {
        let count = stack.length;

        min++;

        while (count--) {
            let [ r, c ] = stack.shift();

            for (let [ x, y ] of moves) {
                let r2 = r + x;
                let c2 = c + y;

                if (inArea(r2, c2) && grid[ r2 ][ c2 ] === 1) {
                    grid[ r2 ][ c2 ] = 2;
                    stack.push([ r2, c2 ]);
                    goods--;
                }
            }
        }
    }

    function inArea(r, c) {
        return r >= 0 && r < m && c >= 0 && c < n;
    }

    return goods > 0 ? -1 : min;
}