import React from "react"

function Comments(props) {
    const { username, comment } = props
    return (
        <div>
            {`${username}: ${comment}`}
        </div>
    )
}

export default Comments