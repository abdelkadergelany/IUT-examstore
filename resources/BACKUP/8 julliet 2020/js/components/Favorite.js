import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { FETCH_EXAMS,SET_FILTER } from '../redux/ActionCreators';
import { getFavorite } from '../redux/AuthAction';
import RenderResult from './RenderResult';
import Pagination from "react-js-pagination";
import Filter from './Filter'
import { FadeTransform } from 'react-animation-components';



const mapStateToProps = state => {
    return {
        Auth: state.Auth

    }
}

const mapDispatchToProps = dispatch => ({
    getFavorite: (param) => dispatch(getFavorite(param))
});
class Favorite extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            fetching: false
        };
    }

    componentDidMount() {
        this.props.getFavorite({page:1 });

    }


    handlePageChange(pageNumber) {
     this.props.getFavorite({page:pageNumber  });
        this.setState({activePage: pageNumber});
      }
    render() {
       // console.log(this.props.Exams)
       { if (this.props.Auth.favoriteList!=null){

        return (
            <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Container maxWidth="md">
            <br/>
            <h1 className='text-center'>Favorite list</h1>
                <div className="section custom-list">
                    <br/>
                    <br/>
                    <RenderResult fetching={this.state.fetching} exam={this.props.Auth.favoriteList.data.data} />

                </div>
                <Container maxWidth="md">
                <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={3}
                totalItemsCount={this.props.Auth.favoriteList.data.last_page * 3}
                pageRangeDisplayed={this.props.Auth.favoriteList.data.last_page}
                onChange={this.handlePageChange.bind(this)}
                itemClass="page-item"
                linkClass="page-link"

              />
              </Container>
            </Container>
            </FadeTransform>

        )
        }
    }
          return(
              <p></p>
          )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favorite));
