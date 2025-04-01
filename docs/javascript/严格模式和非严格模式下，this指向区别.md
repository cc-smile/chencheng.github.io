# 严格模式和非严格模式下，this指向区别

**严格模式下，this指向会有所不同**

普通函数调用，如果是函数直接调用，不通过对象调用，this指向undefined。

```js
"use strict"
function foo() {
    console.log(this); // undefined
}
foo();
```

**通过对象调用‌：如果函数是通过对象方法调用，`this`仍然指向调用该方法的对象。例如：**

```js
"use strict";
const obj = {
    name: 'Fitten Code',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
obj.greet(); // 输出: Hello, Fitten Code
```

**非严格模式下的 `this`指向行为则有所不同**

‌**全局函数调用**‌：在全局作用域中，`this`指向全局对象（在浏览器中是 `window`）。例如：

```js
function foo() {
    console.log(this); // Window
}
foo();
```

‌**对象方法调用**‌：如果函数是作为对象的方法调用，`this`指向该对象。例如：

```js
const obj = {
    name: 'Fitten Code',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
obj.greet(); // 输出: Hello, Fitten Code
```
