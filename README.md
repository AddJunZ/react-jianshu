## Notes

### 全局CSS文件的引入方式
1. CSS文件如果以一般的import方式引入，导致一经进入，会全局生效
2. CSS实现样式独立，采用第三方模块```styled-components```
3. ```styled-components 4.x```版本弃用了```injectGlobal ```的API，改为使用模块的```createGlobalStyle```创建全局css样式，使用方法如下：
```js
//1. 将想要设置为全局样式的文件命名为.js文件
//以**style.js**为例子,后面直接接css的模板字符串即可，并非函数调用
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0
  }
`
//2. 在主入口文件**App.js**添加该样式
import React, { Fragment } from 'react';
import { GlobalStyle } from './style'
const App = () => {
  render(){
    return (
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
      </Fragment>
    );
  }
}
```
4. 针对不同浏览器的[统一样式初始化](https://meyerweb.com/eric/tools/css/reset/)

### 单个文件对应的CSS样式
1. 首先在对应的目录中声明好样式js文件
2. 引入styled-components组件
3. 返回附带好所需样式的标签变量
4. 在index.js文件中使用该赋予了样式的标签变量
5. 在多行字符串中对css简写适配有点差
```js
//引入styled-components组件
import styled from 'styled-components'

//1. 在**header**文件夹下创建独立的**style.js**

//生成带样式的div标签并导出
export const HeaderWrapper = styled.div`
  background:red;
`
export const Logo = styled.a`
  /*style...*/ 
`
//2. 在**header**文件夹下的**index.js**调用对应的标签
import React, { Component } from 'react'
import { HeaderWrapper, Logo } from './style'

class Header extends Component{
  render(){
    return (
      <HeaderWrapper>
        <Logo href='/'/>
      </HeaderWrapper>
    )
  }
}
export default Header;
```

### styled-components的使用技巧
1. 标签内置的属性
```js
//以a标签为例子
//在**style.js**中定义a标签的样式
export const MyA = styled.a.attrs({
  // your attrs
  //such as ↓↓
  href:'/'
})`
  /*singel style.....*/
`
```
2. 特殊样式的表达形式
```js
//1. active活跃态的写法（同个标签多个类名）（&.）
export const MyA = styled.a`
  /*singel style.....*/
  &.my_active{
    color:red;
  }
`
//2. placeholder\、hover等写法（&:）
export const MyInput = styled.input.attrs({
  placeholder:'Seaching...'
})`
  /*singel style.....*/
  &:placeholder{
    color:#eee;
  }
`
//3. 标签的内部标签有类名（.）
export const SearchWrapper = styled.div`
  position:relative;
  .iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
  }
`
```
3. 问题来了，css那么多选择器怎么使用呢
```js
//div > span ?父子
//div + span ?相邻
//div span   ?这些怎么处理呢
```

### redux管理数据
1. 安装依赖```npm install redux react-redux --save```，```redux```用来管理数据，```react-redux```方便我们使用```redux```
2. 创建store目录文件，再在内部创建```index.js```用来导出store，```reducer.js```用来导出reducer可以store使用
3. 具体文件
```js
//  ./store/index.js
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
export default store;

//  ./store/reducer.js
const defaultState = {
  //想要放置在store的公用属性
  haha:'I am haha'
}
export default reduer = (state = defaultState,action) => {
  //期间可以通过action的type属性对state做不同的操作
  return state;
}
```
4. 可选择性创建```./store/actionTypes.js```和```./store/actionCreator.js```分别对action的种类，还有获得action这一行为进行统一管理
5. redux创建完成，需要在对用组件中进行引用
6. 以Header组件为例子
```js
//1. 全局提供store的可访问性
import store from './store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={ store }>
    </Provider>
  )
}
//2. Header内部对store的真实使用
import { connect } from 'react-redux';
const Header = (props) => {
  const  { haha } = props;
  return (
    <div></div>
  )
}

const mapStateToProps = (state) => {
  return {
    //需要挂载带当前组件的props上的属性
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //需要挂载到当前组件的props上的函数，同时使用dispatch操作store的函数
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
```
7. 我们把数据以及数据的操作都存放在```./store/reducer.js```中，会导致整个文件过大难以维护，因此引入```combineReducer```这个函数
```js
import { combineReducers } from 'redux';
import HeaderReducer from '../common/header/store/reducer';

//组装所有的各个组件的reducer
export default combineReducers({
  //自己命名的key值:组件的reducer
  header: HeaderReducer
})
```
通过使用redux里的combineReducer，可以帮助我们把整个reducer分割 成各个组件独立的reducer，再最后进行合并，同时，原先connect中的mapStateToProps和mapDispatch中对this.state的使用要相应变成this.state.header.xxx来调用了，相当于给state多了一层目录
8. 同时，每个组件的store需要独立地使用且独立的存储，维护各自的actionTypes和actionCreators


### immutable管理redux仓库
1. 使用```immutable.js```避免无缘无故修改的state造成排错的困难，生成一个immutable对象，不可改变，设置state为immutable对象，```npm install immutable```，immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象，而不是直接对state进行修改，因此与state的定义不冲突。Immutable的特点是，一但被创建就不能被修改。对immutable对象的修改都将返回一个新的immutable对象。三大特征： 持久化数据结构、结构共享、惰性操作
```js
// ./header/store/reducer.js
import { fromJS } from 'immutable'

//state必须要经过fromJS封装
const defaultState = fromJS({
  focused: false
});

//对应的获取与修改操作
state.get('focused');
state.set('focused',true);
```
2. 使用```redux-immutable```模块统一管理redux资源
> 上面那种写法，store是js对象，store.header是一个immutable对象，容易混淆用法，因此把store也变成immutable对象便于编码
```js
//1. 改变组装reducer的函数，从原来的redux库变成redux-immutable库
import { combineReducers } from 'redux-immutable';

//获取调用
// state.header.get('focused') 
// ==>  state.get('header').get('focused');
// or ==>  state.getIn(['header','focused']);
// 设置调用
// ==> state.set('focuse',false).set('page',1);
// or ==> 同时改变多个数据
// state.merge({
//   focused:false,
//   page:1
// })
     
})
```
3. 当state中有引用类型，由于整个对象都经过fromJS封装，内部的值为引用类型的也经过fromJS封装，因此更新的时候也需要用fromJS封装的值来替换。

### redux-thunk
> 有了这个中间件就可以在action中使用异步操作了
1. 安装```npm install redux-thunk```
2. 作用：之前只能在action中提交更新数据，现在能够让actionCreators导出一个函数了
```js
// header/store/actionCreators

//前 -->
export const CreateActionA = (value) => ({

})

//后
export const createActionB = () => {
  // 返回的函数还能接受dispatch方法，可以来派发异步请求
  return (dispatch) => {
    
  }
}
```
然而如果你想的话，依然可以不使用```redux-thunk```，然后把异步操作放在组件的生命周期中，只是这样比较难以维护和测试

### redux-devtools扩展工具以及react中间件的使用
1. redux-devtools的使用，引入
```js
//1. ./store/index.js

```




### 问题整理
1. react组件中的super(props)到底起了什么作用
2. CSSTransition使用过程中根标签只能有一个？用CSSTransition反而卡帧？用css3反而很流畅？
> 答案：过渡用的css里面的transition与CSSTransition定义的延迟时间不一致导致的