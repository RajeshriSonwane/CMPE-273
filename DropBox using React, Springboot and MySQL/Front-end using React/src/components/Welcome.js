import React, {Component} from 'react';
import PropTypes from 'prop-types';
import newFolder from '../images/newFolder.JPG';
import sharedFolder from '../images/sharedFolder.JPG';
import ImageGridList from "./ImageGridList";
import UserAccount from "./UserAccount";
import About from "./About";
import * as API from '../api/API';
import {Route, withRouter} from 'react-router-dom';

class Welcome extends Component {

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
                            this.setState({
                                images: data
                            });
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
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        {this.state.username}, welcome to my App..!!
                    </div>
                </div>

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
                                <a href='/UserAccount'><h4 style={{
                                    paddingTop: 10,
                                    paddingLeft: 10,
                                    color: '#4779DC'
                                }}>User Accounts</h4></a>
                                <a><h4 style={{
                                    paddingTop: 10,
                                    paddingLeft: 10,
                                    color: '#4779DC'
                                }} onClick={() => this.props.handleListDirectory(this.state)}>My Files</h4></a>
                                <a href={Welcome}><h4 style={{
                                    paddingTop: 10,
                                    paddingLeft: 10,
                                    color: '#4779DC'
                                }}>Paper<input type='Button' style={{
                                    paddingLeft: 2,
                                    paddingRight: 2,
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    backgroundColor: '#2E9AFE'
                                }} value='New' className="btn btn-primary"/></h4></a>
                            </div>
                            <div className="col-md-8">
                                <div className="input-group stylish-input-group">
                                    <input type="text" className="form-control" placeholder="Search"/>
                                    <span className="input-group-addon">

                                    </span>
                                </div>
                                <h3 style={{textAlign: 'left'}}>Home</h3><br/>
                                <h5 style={{textAlign: 'left'}}>Starred</h5>
                                <hr/>
                                <br/>
                                <hr/>
                                <h5 style={{textAlign: 'left'}}>My Files</h5>


                                <ul>
                                    {/*         <h6 style={myStyle}>{this.props.dirStructure[0]}</h6>
                                    <h6 style={myStyle}>{this.props.dirStructure[1]}</h6>
                                    <h6 style={myStyle}>{this.props.dirStructure[2]}</h6>
                                    <h6 style={myStyle}>{this.props.dirStructure[3]}</h6>*/}
                                </ul>

                            </div>
                            <div className="col-md-2">
                                <div className="row">
                                    <a href='/' onClick={() => this.props.handleLogout(this.state)}><h4 style={{
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

                                    <a href='#' style={{
                                        paddingTop: 0,
                                        paddingLeft: 0
                                    }}><br/><img src={sharedFolder}/> New shared folder</a>
                                    <a href='#' style={{
                                        paddingTop: 0,
                                        paddingLeft: 0
                                    }}><br/><img src={newFolder}/> New folder</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <Route exact path="/UserAccount" render={() => (
                    <UserAccount/>
                )}/>
                <Route exact path="/about" render={() => (
                    <About/>
                )}/>
            </div>
        )
    }
}

export default Welcome;
