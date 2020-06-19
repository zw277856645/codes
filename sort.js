// --------------------------------------------------------------------------------------------

let list = [ 5, 4, 8, 1, 3, 7, 0, 9, 2, 6 ];

function maopao(arr) {
    let tmp = null;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[ j ] > arr[ j + 1 ]) {
                tmp = arr[ j ];
                arr[ j ] = arr[ j + 1 ];
                arr[ j + 1 ] = tmp;
            }
        }
    }
}

maopao(list);
console.log(list);

// --------------------------------------------------------------------------------------------

list = [ 5, 4, 8, 1, 3, 7, 0, 9, 2, 6 ];

function select(arr) {
    let min = null;
    let tmp = null;

    for (let i = 0; i < arr.length - 1; i++) {
        min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[ min ] > arr[ j ]) {
                min = j;
            }
        }

        tmp = arr[ i ];
        arr[ i ] = arr[ min ];
        arr[ min ] = tmp;
    }
}

select(list);
console.log(list);

// --------------------------------------------------------------------------------------------

list = [ 5, 4, 8, 1, 3, 7, 0, 9, 2, 6 ];

function insert(arr) {
    let tmp = null;
    let cur = null;

    for (let i = 1; i < arr.length; i++) {
        cur = i - 1;
        tmp = arr[ i ];

        while (cur >= 0 && arr[ cur ] > tmp) {
            arr[ cur + 1 ] = arr[ cur ];
            cur--;
        }

        arr[ cur + 1 ] = tmp;
    }
}

insert(list);
console.log(list);

// --------------------------------------------------------------------------------------------

list = [ 5, 4, 8, 1, 3, 7, 0, 9, 2, 6 ];

function shell(arr) {
    let gap = Math.floor(arr.length / 2);
    let tmp = null;
    let cur = null;

    while (gap >= 1) {
        for (let i = gap; i < arr.length; i++) {
            cur = i - gap;
            tmp = arr[ i ];

            while (cur >= 0 && arr[ cur ] > tmp) {
                arr[ cur + gap ] = arr[ cur ];
                cur = cur - gap;
            }

            arr[ cur + gap ] = tmp;
        }

        gap = Math.floor(gap / 2);
    }
}

shell(list);
console.log(list);

// --------------------------------------------------------------------------------------------

list = [ 5, 4, 8, 1, 3, 7, 0, 9, 2, 6 ];

function quick(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let left = [];
    let right = [];
    let base = arr[ 0 ];

    for (let i = 1; i < arr.length; i++) {
        if (arr[ i ] < base) {
            left.push(arr[ i ]);
        } else {
            right.push(arr[ i ]);
        }
    }

    return quick(left).concat(base, quick(right));
}

console.log(quick(list));

// --------------------------------------------------------------------------------------------

let list1 = [ 2, 5, 7, 9, 12, 45, 55 ];
let list2 = [ -20, 1, 3, 9, 45, 56, 89 ];

function sortedMerge(a, b) {
    let index = a.length + b.length - 1;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 && j >= 0) {
        a[ index-- ] = a[ i ] > b[ j ] ? a[ i-- ] : b[ j-- ];
    }

    while (j >= 0) {
        a[ index-- ] = b[ j-- ];
    }
}

sortedMerge(list1, list2);
console.log(list1);

// --------------------------------------------------------------------------------------------

list1 = [ 2, 5, 7, 9, 12, 45, 55 ];
list2 = [ -20, 1, 3, 9, 45, 56, 89 ];

function sortedMerge2(a, b) {
    let tmp = [];

    while (a.length && b.length) {
        tmp.push(a[ 0 ] < b[ 0 ] ? a.shift() : b.shift());
    }

    return tmp.concat(a, b);
}

console.log(sortedMerge2(list1, list2));

// --------------------------------------------------------------------------------------------

list = [ 5, 4, 8, 1, 3, 7, 0, 9, 2, 6 ];

function merge(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    return sortedMerge2(merge(arr.slice(0, mid)), merge(arr.slice(mid)));
}

console.log(merge(list));

// --------------------------------------------------------------------------------------------

function heapSort(arr) {
    build(arr);

    for (let i = arr.length - 1; i >= 1; i--) {
        swap(arr, 0, i);
        adjust(arr, 0, i - 1);
    }

    return arr;
}

function build(arr) {
    // 第一个非叶子节点为：arr.length / 2
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        adjust(arr, i, arr.length - 1);
    }
}

function adjust(arr, i, end) {
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if (left <= end && arr[ left ] > arr[ i ]) {
        swap(arr, i, left);
        adjust(arr, left, end);
    }
    if (right <= end && arr[ right ] > arr[ i ]) {
        swap(arr, i, right);
        adjust(arr, right, end);
    }
}

function swap(arr, i, j) {
    let tmp = arr[ i ];
    arr[ i ] = arr[ j ];
    arr[ j ] = tmp;
}

console.log(heapSort([ 3, 2, 15, 4, 8, 1, 13, 7, 0, 9, 2, 6, -1, -1 ]));