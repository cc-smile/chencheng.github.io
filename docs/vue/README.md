# Vue指令与过滤器

## v-model指令修饰符

为了方便对用户输入的内容进行处理。vue为v-model指令提供了3个修饰符

| 修饰符  | 作用                              | 示例                              |
| ------- | --------------------------------- | --------------------------------- |
| .number | 自动将用户输入的值转为数值类型    | `<input v-model.number='age'/>` |
| .trim   | 自动过滤用户输入的首位空白字符    | `<input v-model.trim='msg'/>`   |
| .lazy   | 在“change”时而非“input”时更新 | `<input v-model.lazy='msg'/>`   |

## 事件修饰符

在事件处理函数中调用 event.preventDefault()或 event.stopPropagation()是非常常见的需求。因此，vue 提供了事件修饰符的概念，来辅助程序员更方便的对事件的触发进行控制。常用的5个事件修饰符如下：

| 修饰符   | 说明                                                    |
| -------- | ------------------------------------------------------- |
| .prevent | 阻止默认行为（例如：阻止a连接的跳转、阻止表单的提交等） |
| .stop    | 阻止事件冒泡                                            |
| .capture | 以捕获模式触发当前事件处理函数                          |
| .once    | 绑定事件只触发一次                                      |
| .self    | 只有在event.target是当前元素自身时触发事件处理函数      |


## 案件修饰符

在监听键盘事件时，我们经常需要判断详细的按键。此时，可以为键盘相关的事件添加按键修饰符，例如:

| 修饰符 | 说明                                                 |
| ------ | ---------------------------------------------------- |
| .enter | 按键盘回车键触发 `<input @keyup.enter='submit'/>`  |
| .esc   | 按键盘esc键触发 `<input @keyup.esc='clearInput'/>` |
