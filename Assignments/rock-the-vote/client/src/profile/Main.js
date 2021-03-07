import React, { useContext } from "react"
import { AppContext } from "../context/appContext.js"
import Issues from "../profile/Issues.js"
import IssuesForm from "../forms/IssuesForm.js"

function Main() {

    const { allIssues } = useContext(AppContext)

    let everyIssue = allIssues.map(each => <Issues {...each} key={each._id} />)

    return (
        <div>
            <IssuesForm />
            {everyIssue}
        </div>
    )
}

export default Main