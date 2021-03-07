import React, { useContext } from "react"
import { AppContext } from "./context/appContext.js"
import { Link } from "react-router-dom"

function NavBar() {
    const { logout } = useContext(AppContext)
    return (
        <div>
            <Link to="/">Login</Link>
            <Link to="userprofile">User Profile</Link>
            <Link to="main">Main Page</Link>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default NavBar