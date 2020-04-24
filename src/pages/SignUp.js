import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
 
const SignUp = (props) => {
    const [user, setUser] = useState()
    const [password, setPassword] = useState()

    const handleChangeUser = (event) => {
        setUser(event.target.value)
    }

    const handleChangePass = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const userSignUp = {user: user, pass: password}
        localStorage.setItem(localStorage.length +1, JSON.stringify(userSignUp))
        setUser("")
        setPassword("")
        props.history.push("/")
    }

    return(
        <div>
            <h1 className="text-center"></h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label>Username: 
                    <input type="text" value={user} onChange={handleChangeUser}/>
                </label>
                <label>Password: 
                    <input type="password" value={password} onChange={handleChangePass} />
                </label>
                <button>SignUp !</button>
            </form>
        </div>
    )
}

export default withRouter(SignUp);