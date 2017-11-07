import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Redirect} from 'react-router';
import * as API from '../api/API';
import Login from "./Login";
import SignUp from "./SignUp";
import Message from "./Message";
import Welcome from "./Welcome";
import About from "./About";
import DisplayUserDetails from "./DisplayUserDetails";
import dropboxIcon from './Dropbox_icon.JPG';

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: '',
        lastname: '',
        email: '',
        password: '',
        dirStructure: ''
    };

    handleSubmit = (userdata) => {
        API.doLogin(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        email: userdata.email
                    });
                    this.props.history.push("/welcome");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
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
                        email: userdata.email,
                        username: userdata.username,
                        lastname: userdata.lastname,
                        password: userdata.password
                    });
                  }
            });
    };

    handleUserDetails = (userdata) => {
        API.UserInfo(userdata)
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

   handleDisplayUser = (userdata) => {
      API.DisplayUserInfo(userdata)
          .then((res) => {
                  this.setState({
                        username: res.uname,
                        lastname: res.lname,
                        email: res.email,
                        password: res.password
                  });
          });
  };

    render() {
      return (
          <div className="container-fluid">

            <div className="row justify-content-md-center">
                <img src={dropboxIcon} />
            </div>

            <hr></hr>

            <Route exact path="/" render={() => (
                    <Redirect to="/login" />
            )}/>

            <Route exact path="/login" render={() => (
                <div>
                    <Login handleSubmit={this.handleSubmit}/>
                    <Message message={this.state.message}/>
                </div>
            )}/>

            <Route exact path="/signup" render={() => (
                <div>
                    <SignUp handleSignUp={this.handleSignUp}/>
                    <Message message={this.state.message}/>
                </div>
            )}/>

            <Route exact path="/about" render={() => (
              <div>
                  <About email={this.state.email} handleUserDetails={this.handleUserDetails}/>
                  <Message message={this.state.message}/>
                </div>
            )}/>

            <Route exact path="/welcome" render={() => (
              <div>
                <Welcome email={this.state.email} handleDisplayUser={this.handleDisplayUser} />
                </div>
            )}/>

            <Route exact path="/DisplayUserDetails" render={() => (
              <div>
                <DisplayUserDetails username={this.state.username} lastname={this.state.lastname}
                email={this.state.email} password={this.state.password} />
                </div>
            )}/>

        </div>
      );
  }
}

export default withRouter(NewerHomePage);
