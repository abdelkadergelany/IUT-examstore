import React, { Component } from 'react'
import Profile from './Profile'
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import AuthButton from './AuthButton';
import SnackBar from './SnakBar';

const mapStateToProps = state => {
    return {
        Auth: state.Auth,
    }
}

 class MainContenarHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:''

        }

    }
    render() {
        function RenderAuthButton(props){
          if(props.isLoged ==="loged"){
            return <Profile/>
          } else{
            return <AuthButton/>
          }
        }

        return (
            <div>

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
                         <RenderAuthButton isLoged={this.props.Auth.authResponse}/>

                </div>

            </header>
            <SnackBar />
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps)(MainContenarHeader));
