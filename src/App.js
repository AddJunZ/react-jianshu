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

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <IconGlobalStyle></IconGlobalStyle>
        <Header></Header>
      </Fragment>
    </Provider>
  );
}

export default App;
