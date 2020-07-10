import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SemesterArray from './SemesterArray';




class Semester extends Component {

    constructor(props) {
        super(props);

      }
    render() {


        return (
            <div className="container">
                <div className="row">
        <SemesterArray val='1'/>
        <SemesterArray val='2'/>
        <SemesterArray val='3'/>
        <SemesterArray val='4'/>
        <SemesterArray val='5'/>
        <SemesterArray val='6'/>
        <SemesterArray val='7'/>
        <SemesterArray val='8'/>
                </div>
            </div>
        );
    }
}
export default  Semester;
