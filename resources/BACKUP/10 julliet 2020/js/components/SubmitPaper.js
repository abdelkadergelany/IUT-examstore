import React, { Component } from 'react';
import { POST_PAPER } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
    POST_PAPER: (param) => dispatch(POST_PAPER(param))
});

 class SUbmitPaper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            department: "",
            type: "",
            year: "",
            semester: "",
            file:null

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange(event) {
        this.setState({[ event.target.id]:event.target.value})

    }
    handleFileChange(event) {
         this.setState({ file: event.target.files });

     }
     handleClear(){
        this.setState({department:'',semester:'',type:'',year:''});
     }

    handleSubmit(e) {
        e.preventDefault()

        let files = this.state.file;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append(`file[${i}]`, files[i])
        }
        formData.append('department',this.state.department);
        formData.append('type',this.state.type);
        formData.append('semester',this.state.semester);
        formData.append('year',this.state.year);

       this.setState({department:'',semester:'',type:'',year:''});
       this.props.POST_PAPER(formData);

    }


    render() {
        return (
            <div className="row section">
                <div className="col-xl-8 col-md-10 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="card-title mb-0 text-center">SUBMIT A NEW EXAM PAPER</h6>
                        </div>
                        <div className="card-body">
                            <form method="post" encType="multipart/form-data" action="api/post-paper" onSubmit={(values) => this.handleSubmit(values)}>
                                <div className="form-row form-group">
                                    <label htmlFor="department" className="col-md-4 text-md-right col-form-label">Department</label>
                                    <div className="col-md-7">
                                        <select onChange={this.handleChange} required={true} value={this.state.department} name='department' id='department' className="form-control">
                                        <option  >{this.state.department}</option>
                                        <option value='cse'>CSE</option>

                                            <option value='eee'>EEE</option>

                                            <option value='mce'>MCE</option>

                                            <option value='btm'>BTM</option>

                                            <option value='tve'>TVE</option>

                                        </select>
                                    </div>
                                </div>

                                <div className="form-row form-group">
                                <label htmlFor="type" className="col-md-4 text-md-right col-form-label">TYPE</label>
                                <div className="col-md-7">
                                    <select onChange={this.handleChange} value={this.state.type} required={true} name='type' id='type' className="form-control">
                                    <option >{this.state.type}</option>
                                    <option value='midterm'>MIDTERM</option>

                                        <option value='final'>FINAL</option>

                                        <option value='quiz'>QUIZ</option>
                                    </select>
                                </div>
                            </div>
                                <div className="form-row form-group">
                                    <label htmlFor="semester" className="col-md-4 text-md-right col-form-label">SEMESTER</label>
                                    <div className="col-md-7">
                                        <select onChange={this.handleChange} required={true} value={this.state.semester} name='semester' id='semester' className="form-control">
                                            <option >{this.state.semester}</option>
                                            <option value='sem1'>SEM 1</option>

                                            <option value='sem2'>SEM 2</option>

                                            <option value='sem3'>SEM 3</option>

                                            <option value='sem4'>SEM 4</option>

                                            <option value='sem5'>SEM 5</option>

                                            <option value='sem6'>SEM 6</option>

                                            <option value='sem7'>SEM 7</option>

                                            <option value='sem8'>SEM 8</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                <label htmlFor="year" className="col-md-4 text-md-right col-form-label">YEAR</label>
                                <div className="col-md-7">
                                    <div className="custom-file">
                                        <input className="form-control" type="number" value={this.state.year}  id="year"  name="year" onChange={this.handleChange} required={true}  />

                                    </div>
                                </div>
                            </div>
                                <div className="form-row form-group">
                                <label htmlFor="file" className="col-md-4 text-md-right col-form-label">CHOOSE PICTURE</label>
                                <div className="col-md-7">
                                    <div className="custom-file">
                                        <input className="form-control" accept="image/*" type="file" required id="file" multiple name="file[]" onChange={this.handleFileChange} />

                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-7">
                                    <button type="submit" className="btn btn-brand btn-air m-2">SUBMIT</button>
                                    <button type="button" onClick={this.handleClear} className="btn btn-outline-secondary m-2">CLEAR &nbsp;</button>
                                </div>
                            </div>
                        </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


        )
    }

}
export default withRouter(connect(null, mapDispatchToProps)(SUbmitPaper));
