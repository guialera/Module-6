import React, { useState, useContext } from "react"
import { AppContext } from "../context/appContext.js"
import FilterForm from "../components/FilterForm.js"
import StateResults from "../components/StateResults.js"
import StateFilterForm from "../components/StateFilterForm.js"

function ElectionResults(props) {

    //let initPartyWon = { demWon: false, gopWon: false }

    const { getElectionResultsByYear, electionResultsYear } = useContext(AppContext)
    const [results, setResults] = useState()
    const [year, setYear] = useState(2020)
    const [viewStateSearch, setViewStateSearch] = useState(false)
    const [stateSearch, setStateSearch] = useState([])
    //const [partyWon, setPartyWon] = useState(initPartyWon)

    React.useEffect(() => {
        getElectionResultsByYear(year)
    }, [])

    function filterResultsByPartyWon(value) {
        //value === "dem" ? setPartyWon({ demWon: true, gopWon: false }) : setPartyWon({ demWon: false, gopWon: true })
        let allResults = electionResultsYear
        //let filtered = partyWon.demWon ? allResults.filter(each => each.demWon === false) : allResults.filter(each => each.gopWon === false); setResults(filtered)
        let filtered = value === "dem" ? allResults.filter(each => each.demWon === true) : allResults.filter(each => each.gopWon === true); setResults(filtered)

        let stateFiltered = typeof (stateSearch) === "undefined" ? console.log("Undefined") : value === "dem" ? stateSearch.filter(each => each.demWon === true) : stateSearch.filter(each => each.gopWon === true); setStateSearch(stateFiltered)
    }

    function filterResultsByState(value) {
        let foundState = electionResultsYear.find(each => each._id === value)
        typeof (stateSearch) === "undefined" ? setStateSearch(foundState) : setStateSearch(prevStateSearch => [...prevStateSearch, foundState])
    }

    function filterElectionResults(value) {
        setYear(value)
        setResults()
        setStateSearch([])
        setViewStateSearch(false)
        getElectionResultsByYear(value)
    }

    function viewToggle() {
        setViewStateSearch(prevViewStateSearch => !prevViewStateSearch)
    }

    let singleStateResults = typeof (results) === "undefined" ? electionResultsYear.map(each => <StateResults {...each} key={each._id} />) : results.map(each => <StateResults {...each} key={each._id} />)

    let singleStateForm = typeof (results) === "undefined" ? electionResultsYear.map(each => <StateFilterForm {...each} key={each._id} stateFilter={filterResultsByState} />) : results.map(each => <StateFilterForm {...each} key={each._id} stateFilter={filterResultsByState} />)

    let filteredStates = typeof (stateSearch) === "undefined" ? console.log("Undefined") : stateSearch.map(each => <StateResults {...each} key={each._id} />)

    return (
        <div>
            <FilterForm filterByYear={filterElectionResults} filterByParty={filterResultsByPartyWon} />
            <div style={{ display: viewStateSearch ? "block" : "none" }}>
                <div className="singleStateFormContainer">
                    {singleStateForm}
                </div>
                <div className="statesContainer">
                    {filteredStates}
                </div>
            </div>
            <div className="formToggleButtonDiv">
                <button style={{ display: viewStateSearch ? "none" : "block" }} onClick={viewToggle}>Search States</button>
                <button style={{ display: viewStateSearch ? "block" : "none" }} onClick={viewToggle}>View All States</button>
            </div>
            <div style={{ display: viewStateSearch ? "none" : "block" }}>
                <h1 className="yearHeader">{`${year} General Election`}</h1>
                <div className="statesContainer">
                    {singleStateResults}
                </div>
            </div>
        </div>
    )
}

export default ElectionResults