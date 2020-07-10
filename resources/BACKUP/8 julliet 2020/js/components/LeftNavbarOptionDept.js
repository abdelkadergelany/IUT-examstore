import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class LeftNavbarOptionDept extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-nav" data-scrollable="true">
                    <li className="nav-item nav-header">Departments</li>
                    <li className="nav-item">

                        <NavLink activeClassName="active" to="/home"  className="nav-link">
                            <i className="las la-home">
                            </i>
                            <span>
                                Home
                            </span>
                            </NavLink >
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName="active" to="/department/cse"  className="nav-link"><i className="las la-code"></i><span>CSE</span></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName="active" to="/department/eee"  className="nav-link"><i className="las la-microchip"></i><span>EEE</span></NavLink >

                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName="active" to="/department/mce"  className="nav-link"><i className="las la-tools"></i><span>MCE</span></NavLink>

                    </li>

                    <li className="nav-item">
                    <NavLink activeClassName="active" to="/department/btm"  className="nav-link"><i className="las la-toolbox"></i><span>BTM</span></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName="active" to="/department/tve"  className="nav-link"><i className="las la-chalkboard-teacher"></i><span>TVE</span></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName="active" to="/department/cee"  className="nav-link"><i className="las la-hard-hat"></i><span>CEE</span></NavLink>
                    </li>

                    <li className="nav-item nav-header">MORE</li>
                    <li className="nav-item">
                    <NavLink activeClassName="active" to="/favorite"  className="nav-link"><i className="la la-heart-o"></i><span>FAVORITE</span></NavLink>
                    </li>


                </ul>
            </nav>
        )
    }
}
