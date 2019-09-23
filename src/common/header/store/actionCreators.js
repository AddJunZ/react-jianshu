import{ contants } from './index'

export const getChangeFocusAction = (bool) => ({
  type: contants.CHANGE_FOCUS,
  bool
})