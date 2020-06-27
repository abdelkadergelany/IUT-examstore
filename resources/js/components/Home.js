import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';



export default class Home extends Component {

    render() {
        const classes = makeStyles((theme) => ({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        }));
        return (
            <div className={classes.root}>
                <Grid container spacing={2}>

                    <Grid item xs>

                        <div className="custom-card">
                            <div className="custom-card--img">
                                <NavLink activeClassName="active" to="/department/cse" >
                                    <img src="/images/background/cse.png" alt="Remix Songs" className="card-img--radius-md" />
                                    <span className="bg-blur">CSE</span>
                                </NavLink>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs>

                        <div className="custom-card">
                            <div className="custom-card--img">
                                <NavLink activeClassName="active" to="/department/eee" >

                                    <img src="/images/background/eee.png" alt="Remix Songs" className="card-img--radius-md" />
                                    <span className="bg-blur">EEE</span>
                                </NavLink>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs>

                        <div className="custom-card">
                            <div className="custom-card--img">
                                <NavLink activeClassName="active" to="/department/mce" >
                                    <img src="/images/background/mce.png" alt="Remix Songs" className="card-img--radius-md" />
                                    <span className="bg-blur">MCE</span>
                                </NavLink>
                            </div>
                        </div>

                    </Grid>
                </Grid>
                <Grid container spacing={2}>

                    <Grid item xs>

                        <div className="custom-card">
                            <div className="custom-card--img">
                                <NavLink activeClassName="active" to="/department/mce" >
                                    <img src="/images/background/cee.png" alt="Remix Songs" className="card-img--radius-md" />
                                    <span className="bg-blur">CEE</span>
                                </NavLink>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs>

                        <div className="custom-card">
                            <div className="custom-card--img">
                                <NavLink activeClassName="active" to="/department/mce" >
                                    <img src="/images/background/btm.png" alt="Remix Songs" className="card-img--radius-md" />
                                    <span className="bg-blur">BTM</span>
                                </NavLink>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs>

                        <div className="custom-card">
                            <div className="custom-card--img">
                                <NavLink activeClassName="active" to="/department/mce" >
                                    <img src="/images/background/tve.png" alt="Remix Songs" className="card-img--radius-md" />
                                    <span className="bg-blur">TVE</span>
                                </NavLink>
                            </div>
                        </div>

                    </Grid>
                </Grid>

            </div>
        );
    }
}
