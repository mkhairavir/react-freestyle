import axios from 'axios'

export const GET_TOPPING_SUCCESS = "GET_TOPPING_SUCCESS"
export const GET_TOPPING_FAILED = "GET_TOPPING_FAILED"

export const getDataTopSuccess = (result) => {
    return {
        type: GET_TOPPING_SUCCESS,
        result
    }
}

export const getDataTopFailed = (error) => {
    return {
        type: GET_TOPPING_FAILED,
        error
    }
}

export const getDataTop = () => {
    return function(dispatch) {
        axios.get('https://5ea0385811b078001679d857.mockapi.io/resto')
        .then(result => dispatch(getDataTopSuccess(result.data)))
        .catch(error => dispatch(getDataTopFailed(error.message)))
    }
}

export const postDataTop = (postObj) =>{
    return function(dispatch) {
        axios.post('https://5ea0385811b078001679d857.mockapi.io/resto', postObj)
        .then(()=> dispatch(getDataTop()))
        .catch(error => dispatch(getDataTopFailed(error.message)))
    }
}

export const deleteDataTop = (id) =>{
    return function(dispatch) {
        axios.delete(`https://5ea0385811b078001679d857.mockapi.io/resto/${id}`)
        .then(()=> dispatch(getDataTop()))
        .catch(error => dispatch(getDataTopFailed(error.message)))
    }
}

export const editDataTop = (id, data) =>{
    return function(dispatch) {
        axios.post(`https://5ea0385811b078001679d857.mockapi.io/resto/${id}`, data )
        .then(()=> dispatch(getDataTop()))
        .catch(error => dispatch(getDataTopFailed(error.message)))
    }
}
