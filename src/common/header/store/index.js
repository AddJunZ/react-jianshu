//reducer
import reducer from './reducer'
//获得action的函数
import * as actionCreators from './actionCreators'
//管理所有的action的类型type
import * as contants from './actionTypes'

//提供所有内部store相关的访问接口
export { reducer, actionCreators, contants };