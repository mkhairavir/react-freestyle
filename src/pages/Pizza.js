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
            <h3>Pizza (100k)</h3>
            <span>Jumlah pizza yang dipesan: </span><br />
            <button onClick={handleAdd} className="btn btn-success" >Tambah</button><span style={{padding:"0 10px", border:"1px solid black", margin:"0 10px", borderRadius:"5px"}}>{pizzaState.count}</span><button onClick={handleMin} className="btn btn-danger">Kurang</button>
        </div>
    )
}


export default Pizza;