import React, {Component} from 'react';
import PropTypes from 'prop-types';
import newFolder from '../images/newFolder.JPG';
import sharedFolder from '../images/sharedFolder.JPG';
import ImageGridList from "./ImageGridList";
import Welcome from "./Welcome";
import {Route, withRouter} from 'react-router-dom';
import * as API from '../api/API';

class UserAccount extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        handleLogout: PropTypes.func.isRequired,
        handleListDirectory: PropTypes.func.isRequired,
        dirStructure: PropTypes.string.isRequired
    };

    state = {
        username: '',
        dirStructure: ''
    };

    handleFileUpload = (event) => {
        console.log("Inside File Upload")
        const payload = new FormData();

        payload.append('mypic', event.target.files[0]);

        API.uploadFile(payload)
            .then((status) => {
                if (status === 204) {
                    console.log("status " + status)
                    API.getImages()
                        .then((data) => {
                            console.log("vghvhg ", data)
                            this.setState({
                                images: data
                            });
                        });
                }
            });
    };

    handleUserDetails = (userdata) => {
        API.submitUserInfo(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        message: "Details Successfull!!",
                        email: userdata.email
                    });
                }
            });
    };

    componentWillMount() {
        this.setState({
            username: this.props.username,
            dirStructure: this.props.dirStructure
        });
    }

    constructor() {
        super();
        this.state = {
            images: []
        };
    }

    componentDidMount() {
        API.getImages()
            .then((data) => {
                console.log(data);
                this.setState({
                    images: data
                });
            });
    };

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div>
                        <div className="row">
                            <div className="col-md-2" style={{
                                backgroundColor: '#FAFAFA',
                                paddingBottom: 725,
                                textAlign: 'left'
                            }}>
                                <a href='/welcome'><img style={{
                                    textAlign: 'left',
                                    width: 45,
                                    paddingTop: 35,
                                    paddingLeft: 8
                                }}/></a><br/>
                                <a href='/welcome'><h4 style={{
                                    paddingTop: 30,
                                    paddingLeft: 10,
                                    color: '#4779DC'
                                }}>Home</h4></a>
                                <a href='/userAccount'><h4 style={{
                                    paddingTop: 10,
                                    paddingLeft: 10,
                                    color: '#4779DC'
                                }}>User Accounts</h4></a>
                                <a><h4 style={{
                                    paddingTop: 10,
                                    paddingLeft: 10,
                                    color: '#4779DC'
                                }} onClick={() => this.props.handleListDirectory(this.state)}>My
                                    Files</h4></a>
                                <a href={Welcome}><h4 style={{
                                    paddingTop: 10,
                                    paddingLeft: 10,
                                    color: '#4779DC'
                                }}>Paper<input type='Button'
                                               style={{
                                                   paddingLeft: 2,
                                                   paddingRight: 2,
                                                   paddingTop: 2,
                                                   paddingBottom: 2,
                                                   backgroundColor: '#2E9AFE'
                                               }} value='New'
                                               className="btn btn-primary"/></h4>
                                </a>
                            </div>
                            <div className="col-md-8">
                                <div className="input-group stylish-input-group">
                                    <input type="text" className="form-control" placeholder="Search"/>
                                    <span className="input-group-addon">
                                        <button type="submit">
                                            <span className="glyphicon glyphicon-search"></span>
                                        </button>
                                    </span>
                                </div>
                                <br/><br/>

                                <h3 style={{textAlign: 'left'}}>User Account Details</h3>
                                <hr/>
                                <br/>
                                <div className="row">
                                    <a href="/about" onClick={() => this.props.handleUserDetails(this.state)} >
                                        Add User Details
                                    </a>
                                </div>
                                <br/>
                                <div className="row">
                                    <a href="#" onClick={() => this.props.handleUserDetails(this.state)} >
                                        Display User Details
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="row">
                                    <a href='/' onClick={() => this.props.handleLogout(this.state)}><h4
                                        style={{
                                            paddingTop: 10,
                                            paddingLeft: 60
                                        }}>Logout</h4></a>
                                    <div className="col-md-12"><br/><br/></div>
                                    <label className="btn btn-primary" style={{
                                        textAlign: 'Center',
                                        paddingLeft: 50,
                                        paddingRight: 50,
                                        backgroundColor: '#205FDE'
                                    }}>
                                        Upload Files<input type="file" hidden onChange={this.handleFileUpload}/>
                                    </label>

                                    <a href='#' style={{paddingTop: 0, paddingLeft: 0}}><br/><img src={sharedFolder}/>
                                        New shared folder</a>
                                    <a href='#' style={{paddingTop: 0, paddingLeft: 0}}><br/><img src={newFolder}/> New
                                        folder</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <Route exact path="/welcome" render={() => (
                    <welcome/>
                )}/>
            </div>
        )
    }
}

export default UserAccount;
