import { contants } from './index'
import axios from 'axios'
import { fromJS } from 'immutable'


export const getChangeFocusAction = (bool) => ({
  type: contants.CHANGE_FOCUS,
  bool
})

export const getChangeMouseAction = (bool) => ({
  type: contants.CHANGE_MOUSE,
  bool
})


// 自己用的
export const getChangeListAction = (list) => ({
  type:contants.UPDATE_LIST,
  list:fromJS(list),
  //同时知道剩下多少页
  totalPage:Math.ceil(list.length / 10)
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then(res => {
        const action = getChangeListAction(res.data.data);
        dispatch(action);
      })
      .catch(e => {
        console.log('error', e);
      })
  }
}

export const getChangePageAction = (page) => ({
  type:contants.CHANGE_PAGE,
  page
})