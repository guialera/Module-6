import React, { useState } from "react"

function FilterForm(props) {

    const { filterByYear, filterByParty } = props

    const [showForm, setShowForm] = useState(false)

    function recordYear(event) {
        const { value } = event.target
        filterByYear(Number(value))
    }

    function recordParty(event) {
        const { value } = event.target
        filterByParty(value)
    }

    function showFormSetting() {
        setShowForm(prevShowForm => !prevShowForm)
    }

    return (
        <div>
            <div className="filterForm" style={{ display: showForm ? "block" : "none" }}>
                <form>
                    <input
                        type="radio"
                        name="year"
                        value={2020}
                        onChange={recordYear}
                    /> 2020 General Election
                    <input
                        type="radio"
                        name="year"
                        value={2016}
                        onChange={recordYear}
                    /> 2016 General Election
                    <input
                        type="radio"
                        name="year"
                        value={2012}
                        onChange={recordYear}
                    /> 2012 General Election
                    <input
                        type="radio"
                        name="year"
                        value={2008}
                        onChange={recordYear}
                    /> 2008 General Election
            </form>
                <form>
                    <input
                        type="radio"
                        name="partyWon"
                        value="dem"
                        onChange={recordParty}
                    /> Democrat Wins
                    <input
                        type="radio"
                        name="partyWon"
                        value="gop"
                        onChange={recordParty}
                    /> Republican Wins
            </form>
            </div>
            <div className="formToggleButtonDiv">
                <button onClick={showFormSetting}>Show Filter Form</button>
            </div>
        </div>
    )
}

export default FilterForm