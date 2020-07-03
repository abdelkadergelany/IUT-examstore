import React, { Component } from 'react'


export default class RenderResult extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        //console.log(this.props.exam)
          if(!this.props.fetching){
        return (

            <div>{Array.from(this.props.exam).map((ex,index) => {

                return (

                    <div key={index}>
                        <div className="custom-list--item" >
                            <div className="text-dark custom-card--inline">
                                <div className="custom-card--inline-img">
                                    <img src="/images/users/thumb.jpg" alt="" className="card-img--radius-sm" />
                                </div>

                                <div className="custom-card--inline-desc">
                                    <p className="text-truncate mb-0">{ex.title}</p>
                                    <p className="text-truncate text-muted font-sm">{ex.program} </p>
                                </div>
                            </div>
                            <ul className="custom-card--labels d-flex ml-auto">

                                <li >
                                    <a href="#" >
                                        <i className="la la-heart-o"></i>
                                        <span>Save</span>
                                    </a>
                                </li>
                                <li >
                                    <a href="#" >
                                    <i className="la  la-share-alt-square"></i>
                                        <span>share</span>
                                    </a>
                                </li>
                                <li >
                                    <a href="#" >
                                        <i className="la la-heart-o"></i>
                                        <span>download</span>
                                    </a>
                                </li>

                            </ul>

                        </div>
                        <hr />
                    </div>
                )
            })
            }
            </div>
        )
    }else{
        return (
            <p></p>
        )
    }
    }
}
