import React, { Component } from 'react'
//redux
import { connect } from 'react-redux'
//getAction
import { actionCreators } from './store'
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
  SearchWrapper,
  // 信息块
  SearchInfo,
  SearchTitle,
  SearchInfoList,
  SearchInfoItem,
  SearchInfoSwitch
} from './style'

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
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
              <NavSearch className={focused ? "focused" : ""} onFocus={handleInputFocus} onBlur={handleInputBlur} ></NavSearch>
            </CSSTransition>
            <span className={focused ? "iconfont focused" : 'iconfont'}>&#xe60c;</span>
            {/* 点搜索框对应的信息 */}
            {
              this.getListArea(focused)
            }
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
  getListArea(show) {
    if (show) {
      return (
        <SearchInfo >
          <SearchTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchTitle>
          <SearchInfoList>
            <SearchInfoItem>学习</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>前端</SearchInfoItem>
            <SearchInfoItem>后台</SearchInfoItem>
            <SearchInfoItem>大数据</SearchInfoItem>
            <SearchInfoItem>深度学习</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
}


const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused'])
    //映射出来的变量名:store里面的变量名
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getChangeFocusAction(true));
    },
    handleInputBlur() {
      dispatch(actionCreators.getChangeFocusAction(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
