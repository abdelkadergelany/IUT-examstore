import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { FETCH_EXAMS } from '../redux/ActionCreators'
import RenderResult from './RenderResult';
const mapStateToProps = state => {
    return {
        Exams: state.Exams,

    }
}

const mapDispatchToProps = dispatch => ({
    FETCH_EXAMS: (param) => dispatch(FETCH_EXAMS(param)),
});
class ResultList extends Component {

    constructor(props) {
        super(props);


    }

    componentDidMount() {
        this.props.FETCH_EXAMS({ dept: this.props.dept, sem: this.props.sem });

    }
    render() {
        var m =null;
       { if (this.props.Exams){

        return (

            <Container maxWidth="md">
                <div className="section custom-list">
                    <RenderResult exam={this.props.Exams} />
                </div>
            </Container>
        )
        }
    }
          return(
              <p></p>
          )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
