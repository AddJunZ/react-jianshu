import{ contants } from './index'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  focused: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case contants.CHANGE_FOCUS:
      return state.set('focused',!state.get('focused'));
    default:
      return state;
  }
}