import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { closeSnake } from '../redux/AuthAction';



const mapStateToProps = state => {
    return {
        Auth: state.Auth,
    }
}
const mapDispatchToProps = dispatch => ({
    closeSnake: (p) => dispatch(closeSnake(p))
});

class SnackBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: this.props.Auth.snakbar
        }
        this.handleClose = this.handleClose.bind(this);
    }



    handleClose() {
        this.props.closeSnake({snakbar:false})
    }

    render() {
        //  let v = this.props.Auth.snakbar;
        return (
            <div>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.props.Auth.snakbar}
                    autoHideDuration={4000}
                    onClose={this.handleClose}
                    message={this.props.Auth.snakbarMessage}
                    action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                />
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SnackBar));
