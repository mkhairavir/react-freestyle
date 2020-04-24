export const INCREMENTPIZZA = "INCREMENTPIZZA"
export const DECREMENTPIZZA = "DECREMENTPIZZA"

export const addPizza = () => {
    return {
        type: INCREMENTPIZZA
    }
}

export const minPizza = () => {
    return {
        type: DECREMENTPIZZA
    }
}