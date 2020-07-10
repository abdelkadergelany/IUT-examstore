import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class LeftNavbarFooter extends Component {
    render() {
        return (
            <div className="sidebar-footer">
            <NavLink activeClassName="active" className="btn btn-block btn-danger btn-air btn-bold" to="/submit" >
                <i className="ion-md-musical-note"></i>
                <span>Submit paper</span>
            </NavLink>
        </div>
        )
    }
}
