import{ contants } from './index'
const defaultState = {
  focused: false
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case contants.CHANGE_FOCUS:
      // const newState = JSON.parse(JSON.stringify(state));
      // newState.focused = !newState.focused;
      // return newState;
      return { focused: !state.focused };
    default:
      return state;
  }
}