const initialState = {
  counter: 0
}
/**
 * reducer
 * 
 * @param {any} state
 * @param {any} action
 */
function counterApp (state=initialState , action) {
  // if(state===undefined)
  // state=initialState
  switch (action.type) {
    case 'add':
      return Object.assign({}, state, {counter: state.counter + action.val}) // 深复制，后面的覆盖前面的，是覆盖同一个属性
      // return state+1
    default:
    // return 1
      return state
  }
}

export default counterApp
