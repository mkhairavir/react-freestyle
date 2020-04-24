import {INCREMENTPIZZA, DECREMENTPIZZA} from '../action/pizzaActionCounter'

const stateAwal = {
    count: 0,
    harga: 100000
}

const pizzaReducer = (state = stateAwal, action) => {
    switch(action.type){
        case INCREMENTPIZZA:
            return {
                ...state,
                count: state.count +1,
                harga: state.harga
            }
        
        case DECREMENTPIZZA:
            return {
                ...state,
                count: state.count -1,
                harga: state.harga
            }
        default:
            return state
    }
}

export default pizzaReducer;