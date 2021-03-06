import React, { useContext } from "react"
import { AppContext } from "../context/appContext.js"
import Issues from "../profile/Issues.js"

function UserProfile(props) {
    const { userIssues } = useContext(AppContext)

    let issues = userIssues.map(each => <Issues {...each} key={each._id} />)

    return (
        <div>
            {issues}
        </div>
    )
}

export default UserProfile