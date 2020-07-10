import React, { Component, Fragment } from 'react'
import LeftNavbarOptionDept from './LeftNavbarOptionDept'
import LeftNavbarFooter from './LeftNavbarFooter'
import LeftNavbarHeader from './LeftNavbarHeader'



export default class LeftNavbar extends Component {
    render() {
        return (
            <div>
            <aside id="sidebar" className="sidebar-primary">
           <LeftNavbarHeader/>
           <LeftNavbarOptionDept/>
           <LeftNavbarFooter/>
            </aside>
            </div>
        )
    }
}
