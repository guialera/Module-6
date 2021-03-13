import React from "react"

function FilterForm(props) {

    const { filter } = props

    function recordYear(event) {
        const { value } = event.target
        filter(Number(value))
    }

    return (
        <div>
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
            </form>
            <button>Show Filter Form</button>
        </div>
    )
}

export default FilterForm