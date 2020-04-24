import {createStore, applyMiddleware} from 'redux'
import gabunganReducer from './reducer/gabunganReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default createStore(gabunganReducer, applyMiddleware(thunk, logger))