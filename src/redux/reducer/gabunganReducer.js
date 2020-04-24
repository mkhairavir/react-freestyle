import {combineReducers} from 'redux'
import burger from './burgerReducer'
import pizza from './pizzaReducer'
import topping from './toppingReducer'

const gabunganReducer = combineReducers({
    burger,
    pizza,
    topping
})

export default gabunganReducer