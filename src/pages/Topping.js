import React, {useState, useEffect} from 'react'
import {getDataTop,postDataTop,deleteDataTop,editDataTop} from '../redux/action/toppingAction'
import {useSelector, useDispatch} from 'react-redux'

const Topping = () => {
    const topState = useSelector(state => state.topping)
    const topDispatch = useDispatch()

    const [topping, setTopping] = useState("")

    useEffect(() => {
        topDispatch(getDataTop());
    }, [])

    console.log("useefek", topState)

    const handleChange = (event) => {
        setTopping(event.target.value)
        console.log("event", topping)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let newData = {
            id: topState.data[topState.data.length -1 ].id +1,
            food: topping
        }
        topDispatch(postDataTop(newData))
    }

    return (
        <div>
            <h3>Topping</h3>
            <p>Tambahan topping seharga 10k, BEBAS EUY</p>

            <form onSubmit={handleSubmit}>
                <label> Topping Tambahan: 
                    <input type="text" value={topping} onChange={handleChange} />
                </label>
            </form>
            <hr />
            <ol>
            {topState.data.map((item,index) => (
                <div key={index}>
                    <li>{item.food}</li>
                     
                </div>
            ))}
            </ol>

            
        </div>
    )
}

export default Topping