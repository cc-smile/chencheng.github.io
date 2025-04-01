# NodeJs

### npm 帐号信息

```js
npm https://www.npmjs.com/
官网帐号：chencheng321  pwd:chencheng1995321
```

### Node.js 全局安装

```js
npm init 可以初始化package.json文件。
npm install <package-name> --save  安装到 dependencies
npm install <package-name> --save-dev  安装到 devDependencies
```

### 切换 npm 下的包镜像源

```js
npm config get registry 查看当前的下包镜像源
npm config set registry=https://registry.npmjs.org/	 npm 镜像
npm config set registry=https://registry.npm.taobao.org/ 下载淘宝镜像源
```

### Node 版本管理工具 NVM

```js
nvm list               查看已经安装的Node.js版本
nvm install [version]  安装指定版本的Node.js
nvm on                 打开Node.js版本控制
nvm off                关闭Node.js版本控制
nvm use [version]      切换到指定的Node.js版本
```

### 镜像管理工具

```js
npm i nrm -g           全局安装
nrm ls                 查看所有镜像源
nrm use taobao         切换镜像源

npm install -g i5ting_toc           全局安装i5ting_toc组件库
i5ting_toc -f  要转换的文件路径 -o   将markdown文件转换为 html 包 
```

### 将markdown文件转换为html包

```js
npm install -g i5ting_toc           全局安装i5ting_toc组件库
i5ting_toc -f  要转换的文件路径 -o   将markdown文件转换为 html 包 
```

### 自动重启服务包 nodemon

```js
npm install -g nodemon              全局安装nodemon组件库
nodemon app.js                      将markdown文件转换为 html 包 
```
