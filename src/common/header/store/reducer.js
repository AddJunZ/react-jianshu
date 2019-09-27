import { contants } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn:false,
  list: [],
  page:1,
  totalPage:1
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case contants.CHANGE_FOCUS:
      return state.set('focused', action.bool);
    case contants.UPDATE_LIST:
      // 引用类型也是这么设置的？
      //这里不允许使用JSON.xxx对fromJS对象进行复制
      // return state.set('list', action.list);
      return state.merge({
        list:action.list,
        totalPage:action.totalPage
      })
    case contants.CHANGE_MOUSE:
      return state.set('mouseIn',action.bool);
    case contants.CHANGE_PAGE:
        return state.set('page',action.page);
    default:
      return state;
  }
}