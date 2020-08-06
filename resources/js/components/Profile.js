import React, { Component } from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { UserLogout } from '../redux/AuthAction';
import { NavLink } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        Auth: state.Auth,
    }
}

const mapDispatchToProps = dispatch => ({
    UserLogout: () => dispatch(UserLogout()),

});

 class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fetching: false
        };
        this.logoutAction = this.logoutAction.bind(this);

    }
    logoutAction(){
        this.props.UserLogout();
    }
    render() {
        return (
            <div>
                <ul className="header-options d-flex align-items-center">

                    <li className="dropdown linear">
                        <a href="#" className="d-flex align-items-center py-2" role="button" id="userMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="avatar avatar-sm avatar-circle"><img src="/images/users/thumb.jpg" alt="user" /></div>
                            <span className="pl-2">{this.props.Auth.username}</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userMenu">
                            <a className="dropdown-item" href="#"><AccountCircleIcon/>Profile</a>
                            <NavLink activeClassName="active" to="/favorite"  className="nav-link"><FavoriteIcon/>Favoris</NavLink>
                            <div className="dropdown-divider"></div>
                            <div className="px-4 py-2">

                            <span onClick={this.logoutAction}><ExitToAppIcon/>Logout</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
