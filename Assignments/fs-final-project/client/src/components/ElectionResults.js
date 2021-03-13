import React, { useState, useContext } from "react"
import { AppContext } from "../context/appContext.js"
import FilterForm from "../components/FilterForm.js"
import StateResults from "../components/StateResults.js"

function ElectionResults(props) {
    const { getElectionResultsByYear, electionResultsYear } = useContext(AppContext)
    const [resultsByYear, setResultsByYear] = useState([])
    const [year, setYear] = useState(2020)

    React.useEffect(() => {
        initElectionResults()
        getElectionResultsByYear(year)
    }, [])

    function initElectionResults() {
        setResultsByYear(electionResultsYear)
    }

    function filterElectionResults(value){
        setYear(value)
        getElectionResultsByYear(value)
    }

    let singleStateResults = electionResultsYear.map(each => <StateResults {...each} key={each._id} />)

    return (
        <div>
            <FilterForm filter={filterElectionResults}/>
            <h1 className="yearHeader">{`${year} General Election`}</h1>
            <div className="statesContainer">
                {singleStateResults}
            </div>
        </div>
    )
}

export default ElectionResults