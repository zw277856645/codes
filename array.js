// --------------------------------------------------------------------------------------------

let list = [ 1, [ 2, 3, [ 4, 5, 6 ], 7 ], 8, [ 9, [ 10, 11 ], 12 ] ];

function flat(arr, num = 1) {
    if (!Array.isArray(arr)) {
        return [ arr ];
    }

    num--;

    if (num < 0) {
        return arr;
    }

    let newArr = [];

    for (let v of arr) {
        if (!Array.isArray(arr)) {
            newArr.push(v)
        } else {
            newArr.push(...flat(v, num));
        }
    }

    return newArr;
}

console.log(flat(list, 2));

