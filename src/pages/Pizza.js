import React from 'react'
import {useSelector, useDispatch, connect} from 'react-redux'
import {addPizza, minPizza} from '../redux/action/pizzaActionCounter'

const Pizza = () => {
    const pizzaState = useSelector((state) => state.pizza)
    const pizzaDispatch = useDispatch();
    console.log("pizzaSelector",pizzaState)

    const handleAdd = () => {
        pizzaDispatch(addPizza())
    }

    const handleMin = () => {
        pizzaDispatch(minPizza())
    }

    return(
        <div>
            <h3>pizza</h3>
            <span>Jumlah pizza yang dipesan: </span><br />
            <button onClick={handleAdd}>Tambah</button><span>{pizzaState.count}</span><button onClick={handleMin}>Kurang</button>
        </div>
    )
}


export default Pizza;