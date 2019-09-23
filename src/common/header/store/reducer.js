import{ contants } from './index'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  focused: false,
  list:[]
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case contants.CHANGE_FOCUS:
      return state.set('focused',action.bool);
    default:
      return state;
  }
}