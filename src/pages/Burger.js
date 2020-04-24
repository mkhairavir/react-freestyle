import React from 'react'
import {useSelector, useDispatch, connect} from 'react-redux'
import {addBurger, minBurger} from '../redux/action/burgerActionCounter'

const Burger = () => {
    const burgerState = useSelector((state) => state.burger)
    const burgerDispatch = useDispatch();
    console.log("burgState",burgerState)

    const handleAdd = () => {
        burgerDispatch(addBurger())
    }

    const handleMin = () => {
        burgerDispatch(minBurger())
    }

    return(
        <div>
            <h3>Burger (20k)</h3>
            <span>Jumlah burger yang dipesan: </span><br />
            <button onClick={handleAdd} className="btn btn-success">Tambah</button><span style={{padding:"0 10px", border:"1px solid black", margin:"0 10px", borderRadius:"5px"}}>{burgerState.count}</span><button onClick={handleMin} className="btn btn-danger">Kurang</button>
        </div>
    )
}


export default Burger;