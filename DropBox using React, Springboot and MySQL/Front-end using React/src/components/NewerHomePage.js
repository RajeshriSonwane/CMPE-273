import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Message from "./Message";
import Welcome from "./Welcome";
import dropboxIcon from '../images/Dropbox_icon.JPG';
import SignUp from "./SignUp";
import About from "./About";
import UserAccount from "./UserAccount";
import MyFiles from "./MyFiles";

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: ''
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

    handleSignUp = (userdata) => {
        API.doSignUp(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        message: "SignIn Successfull!!",
                        username: userdata.username
                    });
                }
            });
    };

    handleSubmit = (userdata) => {
        API.doLogin(userdata)
            .then((status) => {
                if (status === 200) {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        username: userdata.username
                    });
                    this.props.history.push("/welcome");
                } else if (status === 403) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };

    handleLogout = () => {
        console.log('logout called');
        API.logout()
            .then((status) => {
                if (status === 200) {
                    this.setState({
                        isLoggedIn: false
                    });
                    this.props.history.push("/");
                }
            });
    };


    render() {
        return (
            <div className="container-fluid">

                <div className="row justify-content-md-center">
                    <img src={dropboxIcon}/>
                </div>

                <hr/>

                <Route exact path="/" render={() => (
                    <div>
                        {this.props.history.push("/login")}
                    </div>
                )}/>

                <Route exact path="/login" render={() => (
                    <div>
                        <Login handleSubmit={this.handleSubmit}/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>

                <Route exact path="/welcome" render={() => (
                    <Welcome handleLogout={this.handleLogout} username={this.state.username}/>
                )}/>

                <Route exact path="/signup" render={() => (
                    <div>
                        <SignUp handleSignUp={this.handleSignUp}/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>

                <Route exact path="/about" render={() => (
                    <div>
                        <About username={this.state.username} handleUserDetails={this.handleUserDetails}/>
                    </div>
                )}/>

                <Route exact path="/UserAccount" render={() => (
                    <div>
                        <UserAccount username={this.state.username} handleSubmit={this.handleSubmit}/>
                    </div>
                )}/>
                <Route exact path="/MyFiles" render={() => (
                    <div>
                        <MyFiles handleLogout={this.handleLogout} username={this.state.username}/>
                    </div>
                )}/>

            </div>
        );
    }
}

export default withRouter(NewerHomePage);