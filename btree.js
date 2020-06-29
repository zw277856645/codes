Function.prototype.bind = function (context) {
    let self = this;
    let args = Array.prototype.slice.call(arguments, 1);

    return function () {
        args.concat(Array.prototype.slice.call(arguments));

        self.apply(context, args);
    }
}