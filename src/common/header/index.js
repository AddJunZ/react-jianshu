import React from 'react'
//redux
import { connect } from 'react-redux'
//getAction
import { getChangeFocusAction } from '../../store/actionCreator'
//css
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

const Header = (props) => {
  const { focused, toggleFocus } = props;
  return (
    <HeaderWrapper>
      {/* 左边图片 */}
      <Logo />
      {/* 中间导航 */}
      <Nav>
        {/* 导航项 */}
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left download">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        {/* 搜索框 */}
        <SearchWrapper>
          <CSSTransition
            timeout={200}
            in={focused}
            classNames="slide"
          >
            <NavSearch className={focused ? "focused" : ""} onFocus={toggleFocus} onBlur={toggleFocus} ></NavSearch>
          </CSSTransition>
          <span className={focused ? "iconfont focused" : 'iconfont'}>&#xe60c;</span>
        </SearchWrapper>
      </Nav>
      {/* 右边注册写文章 */}
      <Addition>
        <Button className="reg">注册</Button>
        <Button className="writting"><span className="iconfont">&#xe6a4;</span>写文章</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
    //映射出来的变量名:store里面的变量名
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFocus() {
      const action = getChangeFocusAction();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
