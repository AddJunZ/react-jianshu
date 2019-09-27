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
  render() {
    const { focused,handleInputFocus, handleInputBlur} = this.props;
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
              this.getListArea()
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
  getListArea() {
    const { focused,mouseIn,list,page,totalPage,handleMouseIn,handleMouseOut,handlePageChange } = this.props;
    const newList = list.toJS();
    const pageList = [];
    for(let i = (page - 1) * 10; i < page * 10; i++){
      if(newList[i])
      pageList.push(
        <SearchInfoItem
          key={newList[i]}
        >{newList[i]}</SearchInfoItem>
      )
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
          <SearchTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=>handlePageChange(page,totalPage)}>换一批</SearchInfoSwitch>
          </SearchTitle>
          <SearchInfoList>
            {
              pageList
            }
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
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    mouseIn:state.getIn(['header','mouseIn'])
    //映射出来的变量名:store里面的变量名
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.getChangeFocusAction(true));
    },
    handleInputBlur() {
      dispatch(actionCreators.getChangeFocusAction(false));
    },
    handleMouseIn() {
      dispatch(actionCreators.getChangeMouseAction(true));
    },
    handleMouseOut(){
      dispatch(actionCreators.getChangeMouseAction(false));
    },
    // 换页
    handlePageChange(page,totalPage){
      if(page < totalPage){
        dispatch(actionCreators.getChangePageAction(page + 1));
      }else{
        dispatch(actionCreators.getChangePageAction(1));
      }
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
