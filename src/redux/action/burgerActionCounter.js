export const INCREMENTBURG = "INCREMENTBURG"
export const DECREMENTBURG = "DECREMENTBURG"

export const addBurger = () => {
    return {
        type: INCREMENTBURG
    }
}

export const minBurger = () => {
    return {
        type: DECREMENTBURG
    }
}
