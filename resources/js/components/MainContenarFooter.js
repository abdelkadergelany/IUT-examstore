import React, { Component } from 'react'

export default class MainContenarFooter extends Component {
    render() {
        return (
            <footer id="footer" className="bg-img">
                <div className="footer-content">
                    <div className="platform-btn-inline">
                        <a href="https://camertechshop.com/" target="_blank" className="btn btn-dark btn-air platform-btn">
                        <i className="las la-shopping-cart"></i>
                            <div className="platform-btn-info">
                                <span className="platform-desc">Shop Now</span>

                            </div>
                        </a>
                        <a href="https://blog.camertechshop.com/" target="_blank" className="btn btn-danger btn-air platform-btn">
                        <i className="lab la-blogger"></i>
                            <div className="platform-btn-info">
                                <span className="platform-desc">Visit our blog</span>

                            </div>
                        </a>
                        <br/><br/><span>developped by <a target="_blank" href="https://camertechshop.com/contactus"><b>Camertec</b></a></span>
                    </div>
                </div>
            </footer>
        )
    }
}
