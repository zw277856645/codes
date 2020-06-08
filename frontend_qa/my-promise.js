class MyPromise {

    constructor(handler) {
        this._status = 'pending';
        this._data = undefined;
        this._resolvedQueue = [];
        this._rejectQueue = [];

        try {
            handler(this._resolve.bind(this), this._reject.bind(this));
        } catch (e) {
            this._reject(e);
        }
    }

    _resolve(value) {
        if (this._status !== 'pending') {
            return;
        }

        // 保证方法在 then 之后执行，以便回调入队
        setTimeout(() => {
            this._status = 'resolved';

            if (value instanceof MyPromise) {
                value.then(
                    data => {
                        this._data = data;
                        this._resolvedQueue.forEach(cb => cb(this._data));
                    },
                    err => {
                        this._data = err;
                        this._rejectQueue.forEach(cb => cb(this._data));
                    }
                )
            } else {
                this._data = value;
                this._resolvedQueue.forEach(cb => cb(this._data));
            }
        });
    }

    _reject(err) {
        if (this._status !== 'pending') {
            return;
        }

        setTimeout(() => {
            this._status = 'rejected';
            this._data = err;
            this._rejectQueue.forEach(cb => cb(this._data));
        });
    }

    then(onResolve, onReject) {
        let { _status, _data } = this;

        return new MyPromise((resolveNext, rejectNext) => {
            let onResolveWrapper = data => {
                try {
                    // 当前 then 没有设置 onResolve 回调，将值传递给下一个 then
                    if (typeof onResolve !== 'function') {
                        resolveNext(data);
                    } else {
                        let res = onResolve(data);

                        /*
                         * 返回新的异步对象，则等待其状态改变。resolveNext、rejectNext 作为回调入队(新Promise自身的队列)，
                         * 当状态改变时，会执行入队的回调，相当于执行 resolveNext(newData)，于是新值被传递到下一个 then
                         */
                        if (res instanceof MyPromise) {
                            res.then(resolveNext, rejectNext);
                        } else {
                            resolveNext(res);
                        }
                    }
                } catch (e) {
                    rejectNext(e);
                }
            };

            let onRejectWrapper = err => {
                try {
                    if (typeof onReject !== 'function') {
                        rejectNext(err);
                    } else {
                        let res = onReject(err);

                        if (res instanceof MyPromise) {
                            res.then(resolveNext, rejectNext);
                        } else {
                            rejectNext(res);
                        }
                    }
                } catch (e) {
                    rejectNext(e);
                }
            };

            switch (_status) {
                // 状态未改变前回调入队
                case 'pending':
                    this._resolvedQueue.push(onResolveWrapper);
                    this._rejectQueue.push(onRejectWrapper);
                    break;

                // 状态改变后的 then 调用，直接执行
                case 'resolved':
                    onResolveWrapper(_data);
                    break;
                case 'rejected':
                    onRejectWrapper(_data);
                    break;
            }
        });
    }

    catch(onReject) {
        return this.then(null, onReject);
    }

    finally(callback) {
        return this.then(callback, callback);
    }

    /*----------------------- 扩展 -----------------------*/

    static resolve(value) {
        if (value instanceof MyPromise) {
            return value;
        } else {
            return new MyPromise(resolve => resolve(value));
        }
    }

    static reject(err) {
        return new MyPromise((resolve, reject) => reject(err));
    }

    static all(list) {
        return new MyPromise((resolve, reject) => {
            let datas = [], count = 0;

            for (let p of list) {
                this.resolve(p).then(
                    data => {
                        datas.push(data);

                        if (++count === list.length) {
                            resolve(datas);
                        }
                    },
                    err => reject(err)
                );
            }
        });
    }

    static race(list) {
        return new MyPromise((resolve, reject) => {
            for (let p of list) {
                this.resolve(p).then(
                    data => resolve(data),
                    err => reject(err)
                );
            }
        })
    }
}