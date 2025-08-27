import { combineReducers } from 'redux'
import globalSliceReducer from '@/store/Slices/GlobalSlice/GlobalSlice.js'
const appReducer = combineReducers({
  globalSliceReducer
})


const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer


