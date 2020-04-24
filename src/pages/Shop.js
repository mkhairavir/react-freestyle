import React from 'react'
import Pizza from './Pizza'
import Burger from './Burger'
import Topping from './Topping'
import {useSelector} from 'react-redux'

const Shop = () => {
    const shopSelect = useSelector(state => state)
    const totalBarang = shopSelect.burger.count + shopSelect.pizza.count + shopSelect.topping.data.length
    const totalHarga = shopSelect.burger.harga*shopSelect.burger.count + shopSelect.pizza.harga*shopSelect.pizza.count + shopSelect.topping.data.length*10000
    return (
        <div>
            <Pizza />
            <hr />
            <Burger />
            <hr />
            <Topping />
            <hr />
            <div style={{display:"inline"}}>
            <p>Total barang yang dibeli adalah: {totalBarang} </p>
            <p>Total Harga yang harus dibayar adalah: {totalHarga} </p>
            </div>


        </div>
    )
}

export default Shop;