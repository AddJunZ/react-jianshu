import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

//带样式的div标签
//header的wrapper
export const HeaderWrapper = styled.div`
  user-select:none;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`
//header图片
export const Logo = styled.a.attrs({
  href: '/'
})`
  height:56px;
  width:100px;
  display:block;
  position:absolute;
  top:0;
  left:0;
  background:url(${logoPic});
  background-size:contain;
`

export const Nav = styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
`

export const NavItem = styled.div`
  height:56px;
  padding:15px ;
  line-height:26px;
  font-size:17px;
  color:#333;
  cursor:pointer;
  box-sizing:border-box;
  &.left{
    float:left;
    margin-right:10px;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
  &.download:hover{
    background-color:#f5f5f5;
  }
`


export const SearchWrapper = styled.div`
  float:left;
  position:relative;
  .iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    height:30px;
    line-height:30px;
    border-radius:50%;
    text-align:center;
    &.focused{
      color:#fff;
      background-color:#777;
    }
  }
`


export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:120px;
  height:38px;
  margin-top:9px;
  margin-left:20px;
  border:none;
  border-radius:19px;
  padding:0 35px 0 20px;
  color:#777;
  background-color:#eee;
  font-size:14px;
  outline:none;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:220px;
  }
  &.slide-enter{
    width:120px;
    transition:all .2s linear;
  }
  &.slide-enter-active{
    width:220px;
  }

  &.slide-exit{
    width:220px;
    transition:all .2s linear;
  }
  &.slide-exit-active{
    width:120px;
  }
`

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
  display:flex;
  align-items:center;
`

export const Button = styled.div`
  line-height:35px;
  margin-right:20px;
  padding:0 20px;
  border-radius:19px;
  cursor:pointer;
  border:1px solid #ec6149;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`

