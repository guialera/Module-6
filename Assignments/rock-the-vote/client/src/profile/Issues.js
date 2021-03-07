import React, { useContext, useState } from "react"
import { AppContext } from "../context/appContext.js"
import Comments from "../profile/Comments.js"
import CommentsForm from "../forms/CommentsForm.js"

function Issues(props) {
    const [commentForm, setCommentForm] = useState(false)
    const [buttonsShow, setButtonsShow] = useState(true)

    const { title, description, username, _id } = props
    const { allComments, deleteIssue, user } = useContext(AppContext)

    let everyComment = allComments.map(function (each) {
        if (each.issueId === _id) {
            return (
                <Comments
                    username={each.username}
                    comment={each.comment}
                    key={each._id}
                />
            )
        } else return false
    })

    React.useEffect(() => {
        showButtons()
    }, [])

    function deleteOneIssue(id) {
        deleteIssue(id)
    }

    function showCommentForm() {
        setCommentForm(prevCommentForm => !prevCommentForm)
    }

    function showButtons() {
        if (user.username === username) {
            setButtonsShow(true)
        } else if (user.username !== username)  {
            setButtonsShow(false)
        }
    }

    return (
        <div className="singleIssueDiv">
            <p>{`Posted By: ${username}`}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            <div style={{ display: buttonsShow ? "block" : "none" }}>
                <button onClick={() => deleteOneIssue(_id)}>Delete</button>
                <button>Edit</button>
            </div>
            <button onClick={showCommentForm}>Comment</button>
            <div style={{ display: commentForm ? "block" : "none" }}>
                <CommentsForm issueId={_id} showCommentForm={showCommentForm} />
            </div>
            <h3>Comments:</h3>
            {everyComment}
        </div>
    )
}

export default Issues