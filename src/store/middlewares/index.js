import { applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from './logger'

export default composeWithDevTools(applyMiddleware(thunk,logger))
