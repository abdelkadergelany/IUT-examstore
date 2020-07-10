import React, { Component } from 'react'

export default class LeftNavbarHeader extends Component {
    render() {
        return (
            <div className="sidebar-header d-flex align-items-center">
            <a href="/" className="brand">
                <img src="/images/logo/logo-left.jpg" alt="examstore" />
            </a>

            <button type="button" className="btn p-0 ml-auto" id="hideSidebar">
            <i className="la-3x las la-arrow-circle-left"></i>
            </button>

            <button type="button" className="btn toggle-menu" id="toggleSidebar">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        )
    }
}
