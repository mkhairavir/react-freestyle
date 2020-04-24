import {createStore} from 'redux'
import burgerReducer from './reducer/burgerReducer'
import gabunganReducer from './reducer/gabunganReducer'

export default createStore(gabunganReducer)