import React, { Component } from 'react'

export default class FilterByType extends Component {
    render() {
        return (

            <form action="#" className="form-inline justify-content-end">
                <label className="mr-2" htmlFor="filter2">By Type:</label>
                <select className="custom-select mr-sm-2" id="filter2">
                    <option defaultValue=''>All</option>
                    <option defaultValue="midterm">Midterm</option>
                    <option defaultValue="final">Final</option>
                    <option defaultValue="quiz">Quiz</option>

                </select>
            </form>

        )
    }
}
