---
title: Node.js实现PC端类微信聊天软件（三）
date: 2019-06-28 23:20:25
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

## Redux学习回顾

> Redux的主要功能就是管理复杂交错的State，比如需要讲state提升到顶层组件的场景中，使用Redux就很合适

Redux主要提供三个东西来进行状态管理

### 1. Action

> 表达要进行的动作，也就是通过view层触发，来进行派发来改变全局state

#### action创建函数

也就是只返回一个action的函数

``` JavaScript
export const SignUpEmailChange = (value) => ({
  type: 'SIGNUP_EMAIL_CHANGE',
  value: value,
})
```
<!--more-->
action通常有一个type来进行判断要进行的动作，和任意其它的字段

### 2. Reducer

> 主要进行接收action根据其中的type来进行更改state

``` JavaScript
const registerChange = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  } else if(action.type === 'SIGNUP_NAME_CHANGE') {
    return Object.assign({}, state, {
      signUpForm: {
        signup: true,
        signupUsername: action.value,
        signupEmail: state.signUpForm.signupEmail,
        signupPwd: state.signUpForm.signupPwd,
      },
    })
  }
...
}
```

#### Reducer拆分

当reducer膨胀时还可以进行拆分再用Redux提供的combineReducers进行组合

``` JavaScript
const Reducer = combineReducers({
  ChatBar,
  Message,
})
```

### 3. Store

> Store作为全局的state

#### 使用createStore来创建Store

``` JavaScript
const store = createStore(
  Reducer,
  Initialize,
  applyMiddleware(thunk)
);
```

第二个第三个参数都是可选的，第一个参数就是进行执行动作的Reducer,第二个是初始化state,第三个为中间件

#### 通过Provider组件来进行分发组件

```html
<Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/home" component={MainPanel} />
      </Route>
    </Router>
  </Provider>
```
#### dispatch函数

store通过提供dispatch函数来对action的派发，流程也就是

> view -> action -> reducer -> store -> view

dispatch接收一个action创建函数

``` JavaScript
dispatch(onSignup())
```

### React-Redux

> Redux的一个React绑定库

> 主要提供的是connect把组件包装成容器

``` JavaScript
const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninCmpt);
```

接收两个函数参数

#### mapStateToProps

主要负责把store映射到组件的props上

``` JavaScript
const mapStateToProps = (state) => ({
  signup: state.signup,
})
```

#### mapDispatchToProps

一样是负责映射，把分发函数映射到组件的props上

```JavaScript
const mapDispatchToProps = (dispatch) => ({
  onSignup: () => {
    dispatch(onSignup())
  },
  closeSignup: () => {
    dispatch(closeSignup())
  }
})
```

### Redux-thunk

> 一个action异步处理库，主要功能是能够接收一个返回函数的action创建函数

``` JavaScript
const fetchSignUp = (username, email, password) => {
  const url = 'http://localhost:8008/api/signup';
  const data = {
    username: username,
    email: email,
    password: password,
  };
  console.log('fetch', data)
  return fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
  .then(response => console.log('Success:', response));
}

export const SignUpUser = () => {
  return (dispatch, getState) => {
    // TODO fix parameters
    fetchSignUp(getState().signUpForm.signupUsername, getState().signUpForm.signupEmail, getState().signUpForm.signupPwd)
    .then(res => {
      dispatch({
        type: 'SIGNUP_USER',
        sign: false,
      })
    })
  }
}
```

thunk的在于能够将异步执行逻辑内聚在action中，其中实现利用的是Redux的中间件

## MongoDB学习回顾

### 数据库类型

> 作为有别于关系型数据库的文档型数据库，其中集合对应于表，行对应与文档，列对应于字段

> 主要应用场景

- 游戏场景，使用 MongoDB 存储游戏用户信息，用户的装备、积分等直接以内嵌文档的形式存储.方便查询、更新- 物流场景，使用 MongoDB 存储订单信息，订单状态在运送过程中会不断更新，以 MongoDB 内嵌数组的形式来存储，一次查询就能将订单所有的变更读取出来。
- 社交场景，使用 MongoDB 存储存储用户信息，以及用户发表的朋友圈信息，通过地理位置索引实现附近的人、地点等功能
- 物联网场景，使用 MongoDB 存储所有接入的智能设备信息，以及设备汇报的日志信息，并对这些信息进行多维度的分析
- 视频直播，使用 MongoDB 存储用户信息、礼物信息等

安装驱动包 && 看文档

## 今日完成

今天主要完成的就是在注册窗口的信息录入状态更改和到后台的验证录入响应

1. 注册输入框的状态onChange进行接收action派发更改state更新每个输入框的内容

2. 发送注册请求，利用redux-thunk先进行服务器请求，再进行dispatch

3. 服务器端的接收请求和数据库的添加

``` JavaScript
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("stackchat");
    dbo.collection("user").insertOne(user, function(err, res) {
        if (err) throw err;
        console.log("insert success");
    });
  });
}
```
