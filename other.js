// --------------------------------------------------------------------------------------------
// 获取路径值

let obj = { a: { b: { c: 1 } } };

function get(obj, path) {
    let props = path.split('.');

    if (Object.prototype.toString.call(obj) !== '[object Object]') {
        return obj
    } else if (props.length === 1) {
        return obj[ props[ 0 ] ];
    } else {
        return get(obj[ props[ 0 ] ], props.slice(1).join('.'));
    }
}

console.log(get(obj, 'a'));
console.log(get(obj, 'a.b'));
console.log(get(obj, 'a.b.c'));