import React, { useContext } from "react"
import { AppContext } from "../context/appContext.js"

function SavedResults(props) {

    const {savedResult} = useContext(AppContext)
    console.log(savedResult)

    return (
        <div>SavedResults</div>
    )
}

export default SavedResults