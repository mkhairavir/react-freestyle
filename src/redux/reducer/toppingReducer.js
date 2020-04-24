import {GET_TOPPING_SUCCESS, GET_TOPPING_FAILED} from '../action/toppingAction'

const stateAwal = {
    data: [],
    error: null
}

const toppingReducer = (state = stateAwal, action) => {
    switch(action.type) {
        case GET_TOPPING_SUCCESS:
            return {
                ...state,
                data: action.result
            }
        case GET_TOPPING_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default toppingReducer;