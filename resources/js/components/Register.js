import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { signUp } from '../redux/AuthAction';


const mapStateToProps = state => {
    return {
        Auth: state.Auth,
    }
}

const mapDispatchToProps = dispatch => ({
    signUp: (param) => dispatch(signUp(param))
});

 class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            email:'',
            password:'',
            passwordconfirm:'',


        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }
    handleSubmit (e) {
       e.preventDefault();
       this.props.signUp(this.state);
      // console.log(this.state);
    }
    handleChange(e){
      this.setState({[ e.target.id]:e.target.value})
       // console.log(e)
     }

    render() {
        const root = { display: 'flex', flexWrap: 'wrap' }
        const margin = { margin: '5px' }
        const button = { margin: '1px' }
        if (this.props.Auth.authResponse ==="redirecting you to dashboard") {
            return (
              <Redirect to='/'/>
            )
          }
        return (
            <Container maxWidth="md">
                <h1 className="text-center">Registration form</h1>
                <form style={root} validate='true'  onSubmit={this.handleSubmit} autoComplete="off">

                    <FormControl fullWidth style={margin} variant="outlined">
                        <TextField onChange={this.handleChange} type='text' required={true} id="name" label="Name" variant="outlined" InputProps={{ error: false }} helperText="" />
                    </FormControl>
                    <br />
                    <FormControl fullWidth style={margin} variant="outlined">
                        <TextField  onChange={this.handleChange} type='email' required={true} id="email" label="email" variant="outlined" />
                    </FormControl>
                    <br />

                    <FormControl fullWidth style={margin} variant="outlined">
                        <TextField onChange={this.handleChange} type='password' required={true} id="password" label="password" variant="outlined" />
                    </FormControl>

                    <br />

                    <FormControl fullWidth style={margin} variant="outlined">
                        <TextField onChange={this.handleChange} type='password' required={true} id="passwordconfirm" label="Confirm password" variant="outlined" />
                    </FormControl><br />

                    <FormControl fullWidth style={margin} variant="outlined">
                        <Button
                            variant="contained"
                            color="primary"
                            style={button}
                            type="submit"
                        >
                            Register
                        </Button>
                    </FormControl>


                </form>
            </Container>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
