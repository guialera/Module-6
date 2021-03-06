import React, { useState, useContext } from "react"
import { AppContext } from "../context/appContext.js"

function Auth(props) {
    let emptyForm = {
        username: "",
        password: ""
    }

    const [newUser, setNewUser] = useState(true)
    const [input, setInput] = useState(emptyForm)

    const { signUp, login } = useContext(AppContext)

    function change(event) {
        event.preventDefault()
        setNewUser(prevNewUser => !prevNewUser)
    }

    function fillIn(event) {
        const { name, value } = event.target
        setInput(prevInput => ({ ...prevInput, [name]: value }))
        console.log(input)
    }

    function signUpForm(event){
        event.preventDefault()
        signUp(input)
    }

    function loginForm(event){
        event.preventDefault()
        login(input)
    }

    return (
        <div>
            <div style={{ display: newUser ? "block" : "none" }}>
                <form onSubmit={signUpForm}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter New Username"
                        value={input.username}
                        onChange={fillIn}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="Enter New Password"
                        value={input.password}
                        onChange={fillIn}
                    />
                    <button>Submit</button>
                </form>
            </div>

            <div style={{ display: newUser ? "none" : "block" }}>
                <form onSubmit={loginForm}>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={input.username}
                        onChange={fillIn}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="password"
                        value={input.password}
                        onChange={fillIn}
                    />
                    <button>Submit</button>
                </form>
            </div>

            <button style={{ display: newUser ? "block" : "none" }} onClick={change}>Login</button>
            <button style={{ display: newUser ? "none" : "block" }} onClick={change}>Sign Up</button>
        </div>
    )
}

export default Auth