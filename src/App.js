import React, { Fragment } from 'react';
import Header from './common/header'
import { GlobalStyle } from './style'
import {IconGlobalStyle} from './statics/iconfont/iconfont'

function App() {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <IconGlobalStyle></IconGlobalStyle>
      <Header></Header>
    </Fragment>
  );
}

export default App;
