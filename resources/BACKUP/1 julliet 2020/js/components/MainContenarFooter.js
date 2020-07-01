import React, { Component } from 'react'

export default class MainContenarFooter extends Component {
    render() {
        return (
            <footer id="footer" className="bg-img">
                <div className="footer-content">
                    <a href="#" className="email">info@listenapp.com</a>
                    <div className="platform-btn-inline">
                        <a href="#" className="btn btn-dark btn-air platform-btn">
                            <i className="ion-logo-android"></i>
                            <div className="platform-btn-info">
                                <span className="platform-desc">Available on</span>
                                <span className="platform-name">Android</span>
                            </div>
                        </a>
                        <a href="#" className="btn btn-danger btn-air platform-btn">
                            <i className="ion-logo-apple"></i>
                            <div className="platform-btn-info">
                                <span className="platform-desc">Available on</span>
                                <span className="platform-name">App Store</span>
                            </div>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}
