import React, { useContext } from "react"
import { AppContext } from "./context/appContext.js"
import { Link } from "react-router-dom"

function NavBar() {
    const { logout } = useContext(AppContext)
    return (
        <div>
            <nav>
                <Link className="appLinkText" to="/">Login</Link>
                <Link className="appLinkText" to="userprofile">User Profile</Link>
                <Link className="appLinkText" to="main">Main Page</Link>
                <Link className="appLinkText" to="/"><button onClick={logout}>Log Out</button></Link>
            </nav>
        </div>
    )
}

export default NavBar