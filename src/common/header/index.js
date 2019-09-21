import React, { Component } from 'react'
// import {CSSTransition} from 'react-transition-group'
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

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      focused:false
    }
  }
  render() {
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
            {/* <CSSTransition
              timeout={200}
              in={this.state.focused}
              classNames="slide"
            > */}
              <NavSearch className={this.state.focused ? "focused":""} onFocus={()=> {this.toggleFocus()}} onBlur={()=> {this.toggleFocus()}} ></NavSearch>
              {/* </CSSTransition> */}
              <span className={this.state.focused ? "iconfont focused" : 'iconfont'}>&#xe60c;</span>
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
  toggleFocus(){
    this.setState((preState)=>{
      return ({
        focused:!preState.focused
      })
    })
  }
}
export default Header;
