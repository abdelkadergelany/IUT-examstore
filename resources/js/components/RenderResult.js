import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveFavorite, deleteFavorite, getFavorite } from '../redux/AuthAction';
import {  FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from "react-share";

const mapStateToProps = state => {
    return {
        Auth: state.Auth

    }
}
const mapDispatchToProps = dispatch => ({
    saveFavorite: (param) => dispatch(saveFavorite(param)),
    deleteFavorite: (param) => dispatch(deleteFavorite(param)),
    getFavorite: (param) => dispatch(getFavorite(param)),


});

class RenderResult extends Component {
    constructor(props) {
        super(props);

        this.AddFavorite = this.AddFavorite.bind(this);
        this.handelDelete = this.handelDelete.bind(this);


    }
    handelDelete(e) {
        const confirmDialog = window.confirm("do you really want to delete?");
        if (confirmDialog == true) {
            this.props.deleteFavorite({ pdf: e.pdf, user: e.user });
            this.props.getFavorite({ page: this.props.Auth.favoriteList.data.current_page });
        }
        else {
            return false;
        }


    }
    AddFavorite(e) {
        //   console.log(e);
        this.props.saveFavorite({ id: e });
    }

    render() {
        // console.log(this.props.history.location.pathname)
        if (!this.props.fetching) {
            return (

                <div>{Array.from(this.props.exam).map((ex, index) => {

                    return (

                        <div key={index}>
                            <div className="custom-list--item" >
                                <div className="text-dark custom-card--inline">
                                    <div className="custom-card--inline-img">
                                        <img src="/images/users/thumb.jpg" alt="" className="card-img--radius-sm" />
                                    </div>

                                    <div className="custom-card--inline-desc">
                                        <p className="text-truncate mb-0">{ex.title}</p>
                                        <p className="text-truncate text-muted font-sm">{ex.course_name} </p>
                                    </div>
                                </div>
                                <ul className="custom-card--labels d-flex ml-auto">

                                    {this.props.history.location.pathname == '/favorite' &&
                                        <li>
                                            <span>
                                                <i className="las la-trash-alt"></i>
                                                <span onClick={() => this.handelDelete({ user: ex.user, pdf: ex.pdf })} >Delete</span>
                                            </span>
                                        </li>
                                    }
                                    {this.props.history.location.pathname != '/favorite' &&
                                        <li >
                                            <span>
                                                <i className=" la la-heart-o"></i>
                                                <span onClick={() => this.AddFavorite(ex.id)}> Save</span>
                                            </span>
                                        </li>
                                    }


                                    <li>
                                        <a href={"http://localhost:8000/api/downloadPdf?pdf=" + ex.pdf} >
                                        <i className="las la-download"></i>
                                            <span>download</span>
                                        </a>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"http://localhost:8000/api/downloadPdf?pdf=" + ex.pdf}
                                            quote={ex.pdf}
                                            hashtag="#programing joke">
                                            <WhatsappIcon size={20} round={true} logofillcolor="white" />
                                        </WhatsappShareButton>
                                    </li>
                                    <li>
                                        <FacebookShareButton
                                            url={"http://localhost:8000/api/downloadPdf?pdf=" + ex.pdf}
                                            quote={ex.pdf}
                                            hashtag={ex.pdf}>
                                            <FacebookIcon size={20} round={true} logofillcolor="white" />
                                        </FacebookShareButton>
                                    </li>

                                </ul>

                            </div>
                            <hr />
                        </div>
                    )
                })
                }
                </div>
            )
        } else {
            return (
                <p></p>
            )
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RenderResult));
