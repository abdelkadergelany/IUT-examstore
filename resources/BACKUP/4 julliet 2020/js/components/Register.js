import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            name:'',
            email:'',
            password:'',
            passwordconfirm:''

        }
    }
    handleSubmit (e) {
       e.preventDefault();
       console.log(this.state)
    }
    handleChange(e){
      this.setState({[ e.target.id]:e.target.value})
        console.log(e)
     }

    render() {
        const root = { display: 'flex', flexWrap: 'wrap' }
        const margin = { margin: '5px' }
        const button = { margin: '1px' }

        return (
            <Container maxWidth="md">
                <h1 className="text-center">Registration form</h1>
                <form style={root} validate='true'  onSubmit={this.handleSubmit} autoComplete="off">

                    <FormControl fullWidth style={margin} variant="outlined">
                        <TextField type='text' required={true} id="name" label="Name" variant="outlined" InputProps={{ error: false }} helperText="" />
                    </FormControl>
                    <br />
                    <FormControl fullWidth style={margin} variant="outlined">
                        <TextField autoComplete="off" type='email' required={true} id="email" label="email" variant="outlined" />
                    </FormControl>
                    <br />

                    <FormControl fullWidth style={margin} variant="outlined">
                        <TextField type='password' required={true} id="password" label="password" variant="outlined" />
                    </FormControl>

                    <br />

                    <FormControl fullWidth style={margin} variant="outlined">
                        <TextField type='password' required={true} id="passwordconfirm" label="Confirm password" variant="outlined" />
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
