import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { FETCH_EXAMS,SET_FILTER } from '../redux/ActionCreators';
import RenderResult from './RenderResult';
import Pagination from "react-js-pagination";
import Filter from './Filter'


const mapStateToProps = state => {
    return {
        Exams: state.Exams,
        Filters: state.Filters

    }
}

const mapDispatchToProps = dispatch => ({
    FETCH_EXAMS: (param) => dispatch(FETCH_EXAMS(param)),
    SET_FILTER : (param) => dispatch(SET_FILTER(param))
});
class ResultList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activePage: 1
        };
    }

    componentDidMount() {
        this.props.FETCH_EXAMS({ dept: this.props.dept, sem: this.props.sem,type:'all',year:'all', page:1 });
        this.props.SET_FILTER({ type:'all',year:'all',sem:this.props.sem,dept:this.props.dept});

    }


    handlePageChange(pageNumber) {
       // console.log(`active page is ${pageNumber}`);
     // console.log(this.props.Exams)
     this.props.FETCH_EXAMS({ dept: this.props.dept, sem: this.props.sem,type:this.props.Filters.payload.type,year:this.props.Filters.payload.year, page:pageNumber  });
        this.setState({activePage: pageNumber});

      }
    render() {

       { if (this.props.Exams.data!=null){
      //console.log(this.props.Exams.last_page)
        //this.PageRange;
        return (

            <Container maxWidth="md">
            <Filter />
                <div className="section custom-list">
                    <RenderResult exam={this.props.Exams.data} />
                </div>
                <Container maxWidth="md">
                <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={3}
                totalItemsCount={this.props.Exams.last_page * 3}
                pageRangeDisplayed={this.props.Exams.last_page}
                onChange={this.handlePageChange.bind(this)}
                itemClass="page-item"
                linkClass="page-link"
              />
              </Container>
            </Container>
        )
        }
    }
          return(
              <p></p>
          )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultList));
