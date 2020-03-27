import { createStore } from 'redux'
import reducer from './reducers'
import middlewares from "./middlewares"
function configureStore () {
  return createStore(reducer, {}, middlewares)
}

const store = configureStore()
export default store
