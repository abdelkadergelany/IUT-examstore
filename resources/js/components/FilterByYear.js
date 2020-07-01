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

 class FilterByYear extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.Filters.payload.year
        };
        this.handleValueChange = this.handleValueChange.bind(this);

    }

    handleValueChange(event) {
      //  console.log(event.target.value);
        this.props.FETCH_EXAMS({ type:this.props.Filters.payload.type, dept: this.props.Filters.payload.dept, sem: this.props.Filters.payload.sem,year:event.target.value, page:1 });
        this.props.SET_FILTER({ type:this.props.Filters.payload.type,year:event.target.value,sem:this.props.Filters.payload.sem,dept:this.props.Filters.payload.dept});


      }
    render() {
        return (

            <form action="#" className="form-inline justify-content-end">
                <label className="mr-2" htmlFor="filter1"> By year:</label>
                <select className="custom-select mr-sm-2" id="filter1" onChange={this.handleValueChange} >
                    <option defaultValue='all'>all</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>

                </select>
            </form>

        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterByYear);
