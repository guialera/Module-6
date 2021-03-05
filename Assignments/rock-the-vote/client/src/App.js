import React from "react"
import Auth from "./profile/Auth.js"
import UserProfile from "./profile/UserProfile.js"
import Main from "./profile/Main.js"

function App() {
    return (
        <div>
            <Auth />
            <UserProfile />
            <Main />
        </div>
    )
}

export default App