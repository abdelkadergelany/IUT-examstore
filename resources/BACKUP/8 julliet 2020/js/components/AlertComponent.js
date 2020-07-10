import React, { Component } from 'react'

export default class AlertComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
                 show:this.props.show
        };
    }
    render() {
        return (

            <div className='alert alert-warning alert-dismissible fade show' role="alert">
                <strong>{this.props.message}</strong>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

        )
    }
}
