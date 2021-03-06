import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <Link to="/">Login</Link>
            <Link to="userprofile">User Profile</Link>
            <Link to="main">Main Page</Link>
        </div>
    )
}

export default NavBar