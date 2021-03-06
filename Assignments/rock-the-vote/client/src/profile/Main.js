import React, { useContext } from "react"
import { AppContext } from "../context/appContext.js"
import Issues from "../profile/Issues.js"
import IssuesForm from "../forms/IssuesForm.js"
import CommentsForm from "../forms/CommentsForm.js"

function Main() {

    const { allIssues } = useContext(AppContext)

    let everyIssue = allIssues.map(each => <Issues {...each} key={each._id} />)

    return (
        <div>
            Main
            <IssuesForm />
            <CommentsForm />
            {everyIssue}
        </div>
    )
}

export default Main