
# 函数箭头()=>{}与functiond(){}的区别

**1、箭头函数与function定义函数的写法：**

```js
//function
function fn(a+b){
	return a + b;
}
//arrow function
var foo = (a,b)=>{
	return a + b;
}
```

**2、this指向：**

function定义函数，this指向随着调用环境的变化而变化。箭头函数this指向是不变的，一直指向的是定义函数的环境。

```js
function foo(){
    console.log(this);
}
var obj = { aa: foo };
foo(); 	 //Window 
obj.aa() //obj { aa: foo } this指向的是obj,随着调用环境改变


//使用箭头函数定义函数
var foo = () => { console.log(this) };
var obj = { aa:foo };
foo();    //Window
obj.aa(); //Window  this指向window,函数定义的环境，不会随着调用环境改变而改变

```

**3、构造函数：**
* function可以定义构造函数。
* 箭头函数不能定义构造函数。

```js
//使用function方法定义构造函数
function Person(name, age){
    this.name = name;
    this.age = age;
}
var lenhart =  new Person(lenhart, 25);
console.log(lenhart); //{name: 'lenhart', age: 25}

//尝试使用箭头函数
var Person = (name, age) =>{
    this.name = name;
    this.age = age;
};
var lenhart = new Person('lenhart', 25); //Uncaught TypeError: Person is not a constructor

```

### 4、变量提升：

JavaScript 中，函数及变量的声明都将被提升到函数的最顶部，变量可以在使用后声明，也就是变量可以先使用再声明。箭头函数一定要定义于调用之前！

```js
foo(); //123
function foo(){
    console.log('123');
}

arrowFn(); //Uncaught TypeError: arrowFn is not a function
var arrowFn = () => {
    console.log('456');
};

```

### 5、prototype属性：

* 箭头函数没有prototype属性。
* 传统函数有prototype属性，可以用于实现继承

```js
const foo = () => {};
console.log(foo.prototype); // undefined

function bar() {}
console.log(bar.prototype); // { constructor: ƒ, __proto__: Object }

```

### 6、arguments对象：

* 箭头函数没有自己的arguments对象。它继承自外围作用域。
* 传统函数有自己的arguments对象，包含所有传递给函数的参数。

```js
const foo = () => {};
console.log(foo.prototype); // undefined

function bar() {}
console.log(bar.prototype); // { constructor: ƒ, __proto__: Object }

```
