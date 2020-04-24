import {INCREMENTBURG, DECREMENTBURG} from '../action/burgerActionCounter'

const stateAwal = {
    count: 0,
    harga: 20000
}

const burgerReducer = (state = stateAwal, action) => {
    switch(action.type){
        case INCREMENTBURG:
            return {
                ...state,
                count: state.count +1,
                harga: state.harga
            }
        
        case DECREMENTBURG:
            return {
                ...state,
                count: state.count -1,
                harga: state.harga
            }
        default:
            return state
    }
}

export default burgerReducer;