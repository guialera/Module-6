import React from "react"

function Comments(props) {
    const { comment } = props
    return (
        <div>
            {comment}
        </div>
    )
}

export default Comments