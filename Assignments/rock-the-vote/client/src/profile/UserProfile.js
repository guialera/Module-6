import React, { useContext } from "react"
import { AppContext } from "../context/appContext.js"
import Issues from "../profile/Issues.js"

function UserProfile(props) {
    const { userIssues, user } = useContext(AppContext)

    let username = user.username

    let sortedIssues = userIssues.sort((a, b) => b.votes - a.votes)

    let issues = sortedIssues.map(each => <Issues {...each} key={each._id} />)

    return (
        <div>
            <h1>
                {`Welcome To Your Profile Page ${username}!`}
                <br/>
                {`These Are Your Posts`}
            </h1>
            {issues}
        </div>
    )
}

export default UserProfile