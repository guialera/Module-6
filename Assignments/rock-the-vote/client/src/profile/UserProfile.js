import React, { useContext } from "react"
import { AppContext } from "../context/appContext.js"
import Issues from "../profile/Issues.js"

function UserProfile(props) {
    const { userIssues, user } = useContext(AppContext)

    let username = user.username

    let issues = userIssues.map(each => <Issues {...each} key={each._id} />)

    return (
        <div>
            <h1>{`Welcome To Your Profile Page ${username}!`}</h1>
            {issues}
        </div>
    )
}

export default UserProfile