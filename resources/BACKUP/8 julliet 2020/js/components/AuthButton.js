import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';



export default class AuthButton extends Component {
    render() {
        const margin ={margin:'1px',pading:'1px'}

        return (
            <div>
            <NavLink className="text-white"  to="/login" >
            <Button style={margin} variant="contained" color='primary'>Login</Button>
            </NavLink>

            <NavLink className="text-white"  to="/register" >
            <Button style={margin} variant="contained" color='secondary'>Register</Button>

            </NavLink>
            </div>
        )
    }
}
