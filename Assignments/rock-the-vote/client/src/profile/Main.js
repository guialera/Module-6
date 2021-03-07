import React, { useContext } from "react"
import { AppContext } from "../context/appContext.js"
import Issues from "../profile/Issues.js"
import IssuesForm from "../forms/IssuesForm.js"

function Main() {

    const { allIssues, user } = useContext(AppContext)

    let username = user.username

    let everyIssue = allIssues.map(each => <Issues {...each} key={each._id} />)

    return (
        <div>
            <h1>
                {`What Are Your Pressing Issues ${username}!`}
                <br/>
                {`Join The Conversation Below!`}
            </h1>
            <div className="issuesForm">
                <IssuesForm />
            </div>
            {everyIssue}
        </div>
    )
}

export default Main