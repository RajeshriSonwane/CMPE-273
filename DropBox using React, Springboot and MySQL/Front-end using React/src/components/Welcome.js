import React, {Component} from 'react';
import PropTypes from 'prop-types';
import newFolder from '../images/newFolder.JPG';
import sharedFolder from '../images/sharedFolder.JPG';
import ImageGridList from "./ImageGridList";
import UserAccount from "./UserAccount";
import * as API from '../api/API';
import { Route, withRouter } from 'react-router-dom';

class Welcome extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        handleLogout: PropTypes.func.isRequired,
        handleListDirectory: PropTypes.func.isRequired,
        dirStructure: PropTypes.string.isRequired
    };

    state = {
        username : '',
        dirStructure : ''
    };

    handleFileUpload = (event) => {
        console.log("Inside File Upload")
        const payload = new FormData();

        payload.append('mypic', event.target.files[0]);

        API.uploadFile(payload)
            .then((status) => {
                if (status === 204) {
                    console.log("status "+status)
                    API.getImages()
                        .then((data) => {
                            console.log("vghvhg ",data)
                            this.setState({
                                images: data
                            });
                        });
                }
            });
    };

    componentWillMount(){
        this.setState({
            username : this.props.username,
            dirStructure : this.props.dirStructure
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

    render(){
        var myStyle = {
            textAlign:'left'
        };
        var myStyle2 = {
            textAlign:'left',
            fontSize: 13
        };
        var myStyle1 = {
            textAlign:'right',
            fontSize: 13
        };
        var sty2 = {
            float:'right'
        };
        var sty = {
            backgroundColor: '#FAFAFA',
            paddingBottom: 725,
            textAlign:'left'
        };
        var styImg = {
            textAlign:'left',
            width: 45,
            paddingTop: 35,
            paddingLeft:8
        };
        var upButton ={
            textAlign: 'Center',
            paddingLeft:50,
            paddingRight: 50,
            backgroundColor:'#205FDE'
        };
        var textStyle = {
            paddingTop:30,
            paddingLeft:10,
            color: '#4779DC'
        };
        var textStyle2 = {
            paddingTop: 10,
            paddingLeft:10,
            color: '#4779DC'
        };
        var button ={
            paddingLeft: 2,
            paddingRight:2,
            paddingTop:2,
            paddingBottom:2,
            backgroundColor:'#2E9AFE'
        };
        var pos ={
            position: 'fixed'
        };
        var logoutSty ={
            paddingTop: 10,
            paddingLeft:60
        };
        var folder ={
            paddingTop: 0,
            paddingLeft:0
        };
        return(
            <div>
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        {this.state.username}, welcome to my App..!!
                    </div>
                </div>

                <div className="container-fluid">
                    <div>
                        <div className="row">
                            <div className="col-md-2" style={sty}>
                                <a href='/welcome'><img  style={styImg}/></a><br/>
                                <a href='/welcome'><h4 style={textStyle}>Home</h4></a>
                                <a href='/UserAccount' ><h4 style={textStyle2}>User Accounts</h4></a>
                                <a><h4 style={textStyle2} onClick={() => this.props.handleListDirectory(this.state)}>My Files</h4></a>
                                <a href={Welcome} ><h4 style={textStyle2}>Paper<input type='Button' style={button} value='New' className="btn btn-primary" /></h4></a>
                            </div>
                            <div className="col-md-8">
                                <div className="input-group stylish-input-group">
                                    <input type="text" className="form-control"  placeholder="Search"/>
                                    <span className="input-group-addon">

                                    </span>
                                </div>
                                <h3 style={myStyle}>Home</h3><br/>
                                <h5 style={myStyle}>Starred</h5><hr/><br/><hr/>
                                <h5 style={myStyle}>My Files</h5>


                                <ul>
                                    {/*         <h6 style={myStyle}>{this.props.dirStructure[0]}</h6>
                                    <h6 style={myStyle}>{this.props.dirStructure[1]}</h6>
                                    <h6 style={myStyle}>{this.props.dirStructure[2]}</h6>
                                    <h6 style={myStyle}>{this.props.dirStructure[3]}</h6>*/}
                                </ul>

                            </div>
                            <div className="col-md-2">
                                <div className="row">
                                    <a href='/' onClick={() => this.props.handleLogout(this.state)}><h4 style={logoutSty}>Logout</h4></a>
                                    <div className="col-md-12"> <br/><br/></div>
                                    <label className="btn btn-primary" style={upButton}>
                                        Upload Files<input type="file" hidden onChange={this.handleFileUpload}/>
                                    </label>

                                    <a href='#' style={folder}><br/><img src = {sharedFolder} /> New shared folder</a>
                                    <a href='#' style={folder}><br/><img src = {newFolder} /> New folder</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <Route exact path="/UserAccount" render={() => (
                    <UserAccount />
                )}/>
            </div>
        )
    }
}

export default Welcome;
