import React, { Component } from 'react'
import FilterByYear from './FilterByYear'
import FilterByType from './FilterByType'

export default class Filter extends Component {
    render() {
        return (
            <div className="row align-items-end">
                <span className="col-4 font-weight-bold">{this.props.total} Results Found</span>
                <div className="col-4 ml-auto">

                    <FilterByType />
                </div>
                <div className="col-4 ml-auto">

                   <FilterByYear />
                </div>
                <div className="col-12"><hr /></div>
            </div>
        )
    }
}
