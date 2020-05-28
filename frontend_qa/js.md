#### 闭包是什么？

- 闭包就是能够读取其他函数内部变量的函数

#### 有什么作用？

- 可以读取函数内部的变量，并且让这些变量的值始终保持在内存中

---

#### 跨域问题如何解决？

- jsonp
- cors（Cross-origin resource sharing），服务端设置允许跨域请求头信息
（Access-Control-Allow-Origin、Access-Control-Allow-Credentials）
- nginx反向代理

---

#### JS基本数据类型？

- string、boolean、number、null、undefined、symbol (es6)、bigint (es10)

---

#### async/await 比 Promise 好在哪里？

- 代码更简洁，逻辑更清晰、直观
- try/catch 可以同时处理同步和异步错误，Promise中同步代码错误需要用 .catch 	捕获，且当有很多 then 方法连续调用时，无法知道错误来自哪里
- 便于调试，Promise then 中断点点击下一步时，不会跳转到下一个 then，它会跳	过整个 then 链

---

#### 什么叫函数式编程？

- 一种强调以函数使用为主的软件开发风格，用函数转化数据，用多个函数串行得到最终结果

#### 有什么优点？

- 使用纯函数的代码绝不会更改或破坏全局状态，有助于提高代码的可测试性和可维护性
- 函数式编程采用声明式的风格，易于推理，提高代码的可读性

---

#### 什么是函数柯里化？

- 把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数而且	返回结果的新函数的技术

#### 有什么优点？

- 缓存参数
- 延时执行

#### 简单实现？

```javascript
function curry(fn) {
    let args = [];

    return function curryFn() {
        args = args.concat(Array.prototype.slice.call(arguments));

        return args.length === fn.length ? fn.apply(null, args) : curryFn
    }
}
```

---

#### bind函数的简单实现？

```javascript
Function.prototype.bind = function (context) {
    let self = this;
    let args = Array.prototype.slice.call(arguments, 1);

    return function () {
        let innerArgs = Array.prototype.slice.call(arguments);
        let allArgs = args.concat(innerArgs);

        return self.apply(context, allArgs);
    }
}
```

--- 

#### 浏览器渲染原理/流程？

1. 将 HTML 文档解析成 DOM 树
2. 将 CSS 解析成 CSSOM(CSS Object Model) 树
3. 将 DOM 树和 CSSOM 树合并为渲染树
4. 根据渲染树计算出每个节点在屏幕中的位置，称之为布局(layout)
5. 将计算出的各个节点绘制到屏幕上，称之为绘制(painting)

---

#### 性能优化

- 减少 http 请求数
  - 设置 http 缓存
  - js/css 文件压测、合并
  - 图片精灵(CSS Sprites)，合并图片
- 样式文件放在 head 中，脚本文件放在 body 最后 
- 简化并优化 CSS 选择器，尽量将嵌套层减少到最小
- 缓存 DOM 读取到的值
- DOM 的多个读操作或多个写操作，应该放在一起，不要两个读操作之间，加入一个写操作
- 不要一条条地改变样式，而要通过 class，或 cssText 属性，一次性地修改
- 尽量用 transform 来做形变和位移
- 使用离线 DOM 操作元素
  - 使用 DocumentFragment 批量插入节点
  - 使用 cloneNode 方法，在克隆的节点上进行操作，然后再用克隆的节点替换原始节点
- display: none 的元素不影响重排和重绘。visibility: hidden 的元素只影响重绘，不影响重排
- position 为 absolute 或 fixed 的元素，重排的开销会比较小，因为不用考虑它对其他元素的影响
- 使用 requestAnimationFrame 优化动画

---

#### 防抖(debounce)实现？

```javascript
function debounce(handler, time) {
    let flag = null;

    return function () {
        if (flag) {
            clearTimeout(flag);
        }

        flag = setTimeout(handler, time);
    }
}
```

#### 节流(throttle)实现?

```javascript
function throttle(handler, time) {
    let flag = null;

    return function () {
        let context = this;
        let args = arguments;

        if (!flag) {
            flag = setTimeout(function () {
                handler.apply(context, args);
                flag = null;
            }, time);
        }
    }
}
```

---

#### new 过程？

1. 创建空对象
2. 设置新对象的 constructor 属性为构造函数的名称，
设置新对象的 \_\_proto\_\_ 属性指向构造函数的 prototype 对象
3. 执行构造函数中的代码，构造函数中的 this 指向新对象
4. 返回对象，并赋给等号左边的变量



  