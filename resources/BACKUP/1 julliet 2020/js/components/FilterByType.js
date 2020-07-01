import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FETCH_EXAMS,SET_FILTER } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        Filters: state.Filters,
        Exams: state.Exams,
    }
}
const mapDispatchToProps = dispatch => ({
    FETCH_EXAMS: (param) => dispatch(FETCH_EXAMS(param)),
    SET_FILTER : (param) => dispatch(SET_FILTER(param))
});

 class FilterByType extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.Filters.payload.type
        };
        this.handleValueChange = this.handleValueChange.bind(this);

    }

    handleValueChange(event) {
        //console.log(event.target.value);
        this.props.FETCH_EXAMS({ type:event.target.value, dept: this.props.Filters.payload.dept, sem: this.props.Filters.payload.sem,year:this.props.Filters.payload.year, page:1 });
        this.props.SET_FILTER({ type:event.target.value,year:this.props.Filters.payload.year,sem:this.props.Filters.payload.sem,dept:this.props.Filters.payload.dept});


      }
    render() {
        return (

            <form action="#" className="form-inline justify-content-end">
                <label className="mr-2" htmlFor="filter2">By Type:</label>
                <select className="custom-select mr-sm-2" id="filter2" onChange={this.handleValueChange}>
                    <option defaultValue='all'>all</option>
                    <option defaultValue="midterm">midterm</option>
                    <option defaultValue="final">final</option>
                    <option defaultValue="quiz">quiz</option>

                </select>
            </form>

        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterByType);
