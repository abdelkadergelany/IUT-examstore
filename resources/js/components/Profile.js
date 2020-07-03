import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <ul className="header-options d-flex align-items-center">

                    <li className="dropdown fade-in">
                        <a href="#" className="d-flex align-items-center py-2" role="button" id="userMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="avatar avatar-sm avatar-circle"><img src="/images/users/thumb.jpg" alt="user" /></div>
                            <span className="pl-2">Halo Admin</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userMenu">
                            <a className="dropdown-item" href="profile.html"><i className="ion-md-contact"></i> <span>Profile</span></a>
                            <a className="dropdown-item" href="plan.html"><i className="ion-md-radio-button-off"></i> <span>Your Plan</span></a>
                            <a className="dropdown-item" href="settings.html"><i className="ion-md-settings"></i> <span>Settings</span></a>
                            <div className="dropdown-divider"></div>
                            <div className="px-4 py-2">
                                <a href="#" className="btn btn-sm btn-air btn-pill btn-danger">Logout</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
