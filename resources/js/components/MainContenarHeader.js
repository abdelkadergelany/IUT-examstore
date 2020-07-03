import React, { Component } from 'react'
import Profile from './Profile'
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';



export default class MainContenarHeader extends Component {
    render() {
        const margin ={margin:'1px',pading:'1px'}
        return (
            <header id="header" className="bg-primary">

                <div className="d-flex align-items-center">

                    <button type="button" className="btn toggle-menu mr-3" id="openSidebar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <label htmlFor="searchInput"> <SearchIcon/></label>
                    <form action="#" id="searchForm">

                        <input type="text" placeholder="Search..." id="searchInput" className="form-control" />

                    </form>

                    <NavLink className="text-white"  to="/login" >
                    <Button style={margin} variant="contained" color='primary'>Login</Button>
                    </NavLink>

                    <NavLink className="text-white"  to="/register" >
                    <Button style={margin} variant="contained" color='secondary'>Register</Button>

                    </NavLink>

                </div>

            </header>
        )
    }
}
