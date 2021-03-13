import React, { useState, useContext } from "react"
import { AppContext } from "../context/appContext.js"

function StateResults(props) {
    const [demNumber, setDemNumber] = useState()
    const [gopNumber, setGopNumber] = useState()

    React.useEffect(() => {
        addCommas()
    }, [])

    const {
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
        electoralVotes
    } = props

    function addCommas(){
        numberDemResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        numberGopResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

        setDemNumber(numberDemResult)
        setGopNumber(numberGopResult)
    }

    return (
        <div className="state">
            <h1 className="stateHeader">{state}</h1>
            <hr/>
            <div style={{ backgroundColor: demWon ? "deepskyblue" : "peachpuff", fontWeight: demWon? "bold" : "none" }}>
                <p>{candidateDem}</p>
                <p>{`${demNumber} Votes`}</p>
                <p>{`${percentDemResult}%`}</p>
            </div>
            <hr/>
            <div style={{ backgroundColor: gopWon ? "lightcoral" : "peachpuff", fontWeight: gopWon? "bold" : "none" }}>
                <p>{candidateGop}</p>
                <p>{`${gopNumber} Votes`}</p>
                <p>{`${percentGopResult}%`}</p>
            </div>
            <hr/>
            <p>{`${electoralVotes} Electoral Votes`}</p>
        </div>
    )
}

export default StateResults