import React, { Component } from 'react'

export default class FilterByYear extends Component {
    render() {
        return (

            <form action="#" className="form-inline justify-content-end">
                <label className="mr-2" htmlFor="filter1"> By year:</label>
                <select className="custom-select mr-sm-2" id="filter1">
                    <option defaultValue=''>All</option>
                    <option defaultValue="1">2020</option>
                    <option defaultValue="2">2019</option>
                    <option defaultValue="1">2018</option>
                    <option defaultValue="1">2017</option>
                    <option defaultValue="1">2016</option>
                    <option defaultValue="1">2015</option>
                    <option defaultValue="1">2014</option>

                </select>
            </form>

        )
    }
}
