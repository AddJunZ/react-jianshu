## Notes

### 全局CSS文件的引入方式
1. CSS文件如果以一般的import方式引入，导致一经进入，会全局生效
2. CSS实现样式独立，采用第三方模块```styled-components```
3. ```styled-components 4.x```版本弃用了```injectGlobal ```的API，改为使用模块的```createGlobalStyle```创建全局css样式，使用方法如下：
```js
//1. 将想要设置为全局样式的文件命名为.js文件
//以**style.js**为例子,后面直接接css的模板字符串即可，并非函数调用
import {createGlobalStyle} from 'styled-components'
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
import {HeaderWrapper,Logo} from './style'

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



### 问题整理
1. react组件中的super(props)到底起了什么作用
2. CSSTransition使用过程中根标签只能有一个？用CSSTransition反而卡帧？用css3反而很流畅？