import React, { useContext, useState } from "react"
import { AppContext } from "../context/appContext.js"
import Comments from "../profile/Comments.js"
import CommentsForm from "../forms/CommentsForm.js"

function Issues(props) {
    const [commentForm, setCommentForm] = useState(false)

    const { title, description, _id } = props
    const { allComments, deleteIssue } = useContext(AppContext)

    let everyComment = allComments.map(function (each) {
        if (each.issueId === _id) {
            return (
                <Comments
                    comment={each.comment}
                    key={each._id}
                />
            )
        } else return false
    })

    function deleteOneIssue(id) {
        deleteIssue(id)
    }

    function showCommentForm() {
        setCommentForm(prevCommentForm => !prevCommentForm)
    }

    return (
        <div>
            {title}
            <br/>
            {description}
            <button onClick={() => deleteOneIssue(_id)}>Delete</button>
            <button>Edit</button>
            <button onClick={showCommentForm}>Comment</button>
            <div style={{ display: commentForm ? "block" : "none" }}>
                <CommentsForm issueId={_id} showCommentForm={showCommentForm}/>
            </div>
            {everyComment}
        </div>
    )
}

export default Issues