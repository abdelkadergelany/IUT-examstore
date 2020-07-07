import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import {FETCH_EXAMS} from '../redux/ActionCreators'
const mapStateToProps = state => {
    return {
        Exams: state.Exams,
    }
  }

    const mapDispatchToProps = dispatch => ({
        FETCH_EXAMS: () => dispatch(FETCH_EXAMS()),
    });
 class ResultList extends Component {

    constructor(props) {
        super(props);

      }

      componentDidMount() {
        this.props.FETCH_EXAMS();
      }
    render() {
       // console.log(this.props.dept)
       // console.log(this.props.sem)


       // console.log(this.props.Exams);
        return (
            <Container maxWidth="md">
            <div className="section custom-list">

                <div className="custom-list--item">
                    <div className="text-dark custom-card--inline">
                        <div className="custom-card--inline-img">
                            <img src="/images/users/thumb.jpg" alt="" className="card-img--radius-sm" />
                        </div>

                        <div className="custom-card--inline-desc">
                            <p className="text-truncate mb-0">I Love You Mummy</p>
                            <p className="text-truncate text-muted font-sm">Arebica Luna</p>
                        </div>
                    </div>
                    <ul className="custom-card--labels d-flex ml-auto">

                        <li >
                            <a href="#" >
                                <i className="la la-heart-o"></i>
                                <span>Favorite</span>
                            </a>
                        </li>
                        <li >
                            <a href="#" >
                                <i className="la la-heart-o"></i>
                                <span>share</span>
                            </a>
                        </li>
                        <li >
                            <a href="#" >
                                <i className="la la-heart-o"></i>
                                <span>download</span>
                            </a>
                        </li>

                    </ul>
                </div>
                <hr/>
                <div className="custom-list--item">
                <div className="text-dark custom-card--inline">
                    <div className="custom-card--inline-img">
                        <img src="/images/users/thumb.jpg" alt="" className="card-img--radius-sm" />
                    </div>

                    <div className="custom-card--inline-desc">
                        <p className="text-truncate mb-0">I Love You Mummy</p>
                        <p className="text-truncate text-muted font-sm">Arebica Luna</p>
                    </div>
                </div>
                <ul className="custom-card--labels d-flex ml-auto">

                    <li >
                        <a href="#" >
                            <i className="la la-heart-o"></i>
                            <span>Favorite</span>
                        </a>
                    </li>
                    <li >
                        <a href="#" >
                            <i className="la la-heart-o"></i>
                            <span>share</span>
                        </a>
                    </li>
                    <li >
                        <a href="#" >
                            <i className="la la-heart-o"></i>
                            <span>download</span>
                        </a>
                    </li>

                </ul>
            </div>
            <hr/>
            <div className="custom-list--item">
            <div className="text-dark custom-card--inline">
                <div className="custom-card--inline-img">
                    <img src="/images/users/thumb.jpg" alt="" className="card-img--radius-sm" />
                </div>

                <div className="custom-card--inline-desc">
                    <p className="text-truncate mb-0">I Love You Mummy</p>
                    <p className="text-truncate text-muted font-sm">Arebica Luna</p>
                </div>
            </div>
            <ul className="custom-card--labels d-flex ml-auto">

                <li >
                    <a href="#" >
                        <i className="la la-heart-o"></i>
                        <span>Favorite</span>
                    </a>
                </li>
                <li >
                    <a href="#" >
                        <i className="la la-heart-o"></i>
                        <span>share</span>
                    </a>
                </li>
                <li >
                    <a href="#" >
                        <i className="la la-heart-o"></i>
                        <span>download</span>
                    </a>
                </li>

            </ul>
        </div>
            </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
