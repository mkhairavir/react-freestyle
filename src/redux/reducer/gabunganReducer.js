import {combineReducers} from 'redux'
import burger from './burgerReducer'
import pizza from './pizzaReducer'

const gabunganReducer = combineReducers({
    burger,
    pizza
})

export default gabunganReducer