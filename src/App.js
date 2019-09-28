import React, { Fragment } from 'react';
import Header from './common/header'
// 全局样式
import { GlobalStyle } from './style'
//iconfont的全局样式
import { IconGlobalStyle } from './statics/iconfont/iconfont'
// redux的provider
import { Provider } from 'react-redux'
//store
import store from './store'
//react路由
import { BrowserRouter,Route } from "react-router-dom";
//路由组件
import Home from './pages/home';
import Detail from './pages/detail';


function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <IconGlobalStyle></IconGlobalStyle>
        <Header></Header>
        {/* 路由 */}
        <BrowserRouter>
          {/* 路由规则 */}
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
