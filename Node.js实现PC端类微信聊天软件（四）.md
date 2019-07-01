---
title: Node.js实现PC端类微信聊天软件（四）
date: 2019-06-30 23:10:25
tags:
  - Node.js
  - React
  - Electron
  - Socket
  - 大二期间
categories:
  - 学习笔记
  - 开发日记
  - StackChat开发记录
copyright: true
---

> [Github StackChat](https://github.com/dejavudwh/StackChat)

## 学习回顾

### **React和Electron结合**

> TypeError: fs.existsSync is not a function

在React组件里引入electron时候就会报这个错，主要原因是在React里不能引入Node.js的模块

#### 解决方法

1. Webpack target属性

先展开Create-React-App所有配置
```JavaScript
npm run eject
```

在webpack.config.js下添加配置
```JavaScript
// other configs...
module.exports = function(webpackEnv) {
// some configs
    return {
        target: 'electron-renderer', // 添加target
        // other configs
    }
}
```

2. 预编译引入electron

在electron主进程创建窗口时加入属性
```JavaScript
win = new BrowserWindow({
    width: 1150,
    height: 580,
    webPreferences: {
      preload: __dirname + '/renderer.js'
    }
  });
```
<!--more-->
在renderer.js里加入

```JavaScript
global.electron = require('electron')
```

在index.html引入
```html
<script>require('./renderer.js')</script>
```

3. 直接使用window引入

```JavaScript
const electron = window.require('electron')
```

### **combineReducers的使用**

```JavaScript
import { combineReducers } from 'redux'
```

combineReducers函数的参数是若干个拆分完的reducer片段

```JavaScript
export default combineReducers({
  register: registerChange,
  login: loginInfoChange,
})
```

在使用了combineReducers，state就会根据combineReducers的参数进行合并,上面的结合完的state就会变成

```JavaScript
state = {
  register: {
    ...
  }，
  login: {
    ...
  }
}
```

各自内部的结构就根据每个子Reducer的初始state来决定

```JavaScript
//loginInfoChange的初始状态
const initialState = {
  email: '',
  password: '',
}
```

这样state就会被合并为
```JavaScript
state = {
  register: {
    ...
  }，
  login: {
    email: '',
    password: '',
  }
}
```

### mongoDB操作

> 根据MongoDB node.js Driver的文档来看，提供了callback和promise两种方法，妥妥选择promise

#### Promise

> promise提供了异步编程的新方法

总的来说promise本身就是一个异步操作，但它提供了更优雅的方式来控制异步

创建promise对象
```JavaScript
new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

then方法接收resolved状态的回调函数
```JavaScript
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```
可以接受两个参数来接收resolve状态和reject状态，一般只指定resolve状态

链式then，then方法里如果是一个函数，则将返回值作为下一个then调用的参数，还可以是promise对象，这时后一个回调函数，就会等待该Promise对象的状态发生变化

```JavaScript
mongonConnect
    .then(db => checkRepeatEmail(db, user.email))
    .then((db) => {
      addUser(db, user)
      response.send(SUCCESS_MESSAGE)
    })

```

catch方法，用于接住reject发出时回调函数

```JavaScript
mongonConnect
    .then(db => checkRepeatEmail(db, user.email))
    .then((db) => {
      addUser(db, user)
      response.send(SUCCESS_MESSAGE)
    })
    .catch((err) => {
      if (err === 'EMAIL_EXISTING') {
        response.send(EAMIL_FAILED_MESSAGE)
      } else {
        response.send(500)
      }
    })
```

## Coding

> 跳出登录总结一下

- View发出action
  - 通过redux-thunk在action中执行函数
  - action中像服务器验证账号
- 服务器返回响应
- 根据响应改变状态

### container组件

通过react-redux的connect把方法映射到展示组件上

```JavaScript
signInUser: () => {
    dispatch(signInUser())
  },
```

### action

通过中间件在action中执行函数，来向服务器发送请求再根据服务器响应来分发状态

```JavaScript
export const signInUser = () => (dispatch, getState) => {
  const email = getState().login.email
  const password = getState().login.password

  fetchSignIn(email, password)
    .then((response) => {
      if (response.status === 200) {
        const path = '/home'
        browserHistory.push(path)
        dispatch(signInSuccess())
      } else if (response.status === 400) {
        dialog.showMessageBox({
          title: '提示',
          message: response.message,
        })
        dispatch(signInFail())
      }
    })
}
```

### 服务器端

向数据层验证数据之后返回响应

```JavaScript
function signinForUser(user, response) {
  const email = user.email
  const password = user.password

  mongonConnect
    .then(db => verifyPassword(db, email, password))
    .then((message) => {
      if (message === SIGNIN_SUCCESS) {
        response.send(SIGNIN_SUCCESS_MESSAGE)
      }
    })
    .catch((message) => {
      if (message === USER_NO_EXIST) {
        response.send(USER_NO_EXIST_MESSAGE)
      } else if (message === PASSWORD_ERROR) {
        response.send(PASSWORD_ERROR_MESSAGE)
      }
    })
}
```