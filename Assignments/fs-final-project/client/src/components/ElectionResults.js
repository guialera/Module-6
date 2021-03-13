import React, { useState, useContext } from "react"
import { AppContext } from "../context/appContext.js"
import FilterForm from "../components/FilterForm.js"
import StateResults from "../components/StateResults.js"

function ElectionResults(props) {

    let initPartyWon = {
        demWon: false,
        gopWon: false
    }

    const { getElectionResultsByYear, electionResultsYear } = useContext(AppContext)
    const [results, setResults] = useState()
    const [year, setYear] = useState(2020)
    const [partyWon, setPartyWon] = useState(initPartyWon)

    React.useEffect(() => {
        getElectionResultsByYear(year)
    }, [])

    function filterResultsByPartyWon(value) {
        value === "dem" ? setPartyWon(({ demWon: true, gopWon: false })) : setPartyWon({ demWon: false, gopWon: true })
        let allResults = electionResultsYear
        let filtered = partyWon.demWon ? allResults.filter(each => each.demWon === false) : allResults.filter(each => each.gopWon === false); setResults(filtered)
    }

    function filterElectionResults(value) {
        setYear(value)
        setResults()
        getElectionResultsByYear(value)
    }

    let singleStateResults = typeof (results) === "undefined" ? electionResultsYear.map(each => <StateResults {...each} key={each._id} />) : results.map(each => <StateResults {...each} key={each._id} />)

    return (
        <div>
            <FilterForm filterByYear={filterElectionResults} filterByParty={filterResultsByPartyWon} />
            <h1 className="yearHeader">{`${year} General Election`}</h1>
            <div className="statesContainer">
                {singleStateResults}
            </div>
        </div>
    )
}

export default ElectionResults