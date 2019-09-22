import { combineReducers } from 'redux-immutable';
//别名
import { reducer as HeaderReducer } from '../common/header/store';

//组装所有的各个组件的reducer
const wholeReduers = combineReducers({
  header: HeaderReducer
})

export default wholeReduers;