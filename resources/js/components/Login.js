import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {withRouter,Redirect} from 'react-router-dom'
import { UserLogin } from '../redux/AuthAction';


const mapStateToProps = state => {
    return {
        Auth: state.Auth,
    }
}

const mapDispatchToProps = dispatch => ({
    UserLogin: (param) => dispatch(UserLogin(param))
});
 class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.UserLogin(this.state);
      //  console.log(this.state);
     }
     handleChange(e){
       this.setState({[ e.target.id]:e.target.value})
         //console.log(e)
      }
    render() {
        const root = { display: 'flex', flexWrap: 'wrap' }
        const margin = { margin: '5px' }
        const button = { margin: '1px' }
        if (this.props.Auth.authResponse ==="loged") {
            return (
              <Redirect to='/home'/>
            )
          }
        return (
            <Container maxWidth="md">
                <h1 className="text-center">Login form</h1>
                <form style={root} validate='true' onSubmit={this.handleSubmit}>

                    <FormControl fullWidth style={margin} variant="outlined">
                        <TextField onChange={this.handleChange} type="email" required={true} id="email" label="email" variant="outlined" />
                    </FormControl>
                    <br />

                    <FormControl fullWidth style={margin} variant="outlined">
                        <TextField onChange={this.handleChange} type='password' required={true} id="password" label="password" variant="outlined" />
                    </FormControl>

                    <br />

                    <FormControl fullWidth style={margin} variant="outlined">
                        <Button
                            variant="contained"
                            color="primary"
                            style={button}
                            type="submit"
                        >
                           Login
                        </Button>
                    </FormControl>


                </form>
            </Container>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
