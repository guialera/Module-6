import React, { useState, useContext } from "react"
import { AppContext } from "../context/appContext.js"

function StateResults(props) {

    const { savedResult } = useContext(AppContext)

    const [demNumber, setDemNumber] = useState()
    const [gopNumber, setGopNumber] = useState()
    const [showSaveButton, setShowSaveButton] = useState(true)

    React.useEffect(() => {
        addCommas()
        setButtons()
    }, [])

    const {
        _id,
        electionYear,
        state,
        demWon,
        gopWon,
        candidateDem,
        candidateGop,
        numberDemResult,
        percentDemResult,
        numberGopResult,
        percentGopResult,
        marginOfVictory,
        electoralVotes,
        getId,
        getIdDelete
    } = props

    function addCommas() {
        numberDemResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        numberGopResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

        setDemNumber(numberDemResult)
        setGopNumber(numberGopResult)
    }

    function sendIdToSave() {
        getId(_id)
        setShowSaveButton(false)
    }

    function sendIdToDelete() {
        let id = savedResult.find(each => each.electionYear === electionYear && each.state === state)
        getIdDelete(id._id)
        setShowSaveButton(true)
    }

    function setButtons() {
        savedResult.map(function (each) {
            if (each.electionYear === electionYear && each.state === state) {
                setShowSaveButton(false)
            }
        })
    }

    return (
        <div className="state">
            <h1 className="stateHeader">{state}</h1>
            <hr />
            <div style={{ backgroundColor: demWon ? "deepskyblue" : "peachpuff", fontWeight: demWon ? "bold" : "none" }}>
                <p>{candidateDem}</p>
                <p>{`${demNumber} Votes`}</p>
                <p>{`${percentDemResult}%`}</p>
            </div>
            <hr />
            <div style={{ backgroundColor: gopWon ? "lightcoral" : "peachpuff", fontWeight: gopWon ? "bold" : "none" }}>
                <p>{candidateGop}</p>
                <p>{`${gopNumber} Votes`}</p>
                <p>{`${percentGopResult}%`}</p>
            </div>
            <hr />
            <p>{`${electoralVotes} Electoral Votes`}</p>
            <div style={{ display: showSaveButton ? "block" : "none" }}>
                <button onClick={sendIdToSave}>Save Result</button>
            </div>
            <div onClick={sendIdToDelete} style={{ display: showSaveButton ? "none" : "block" }}>
                <button>Delete Saved Result</button>
            </div>
        </div>
    )
}

export default StateResults