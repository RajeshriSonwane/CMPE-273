import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import SignUp from "./SignUp";
import Message from "./Message";
import Welcome from "./Welcome";
import About from "./About";
import DisplayUserDetails from "./DisplayUserDetails";
import dropbox from './dropbox.jpeg';

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        email: '',
        results: ''
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
                        email: userdata.email
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
              if (res.status === 200) {
                   res.json().then( data => {
                           this.setState({...this.state,
                               results: data
                           });
                       }
                   )
               }
           })
         };

    render() {
      return (
          <div className="container-fluid">
          <div className="row">
          </div>
              <img src={dropbox} />

              <Route exact path="/" render={() => (
                <div className="col-sm-4" >
                      <button className="btn btn-success" onClick={() => {
                          this.props.history.push("/login");
                      }}>
                          Login
                      </button>
                  </div>
              )}/>
              <hr></hr>
              <Route exact path="/" render={() => (
                  <div className="col-sm-4" >
                      <button className="btn btn-success" onClick={() => {
                          this.props.history.push("/signup");
                      }}>
                          SignUp
                      </button>
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
                  <About email={this.state.email}
                  handleUserDetails={this.handleUserDetails}/>
                  <Message message={this.state.message}/>

                  </div>
              )}/>

              <Route exact path="/login" render={() => (
                  <div>
                      <Login handleSubmit={this.handleSubmit}/>
                      <Message message={this.state.message}/>
                  </div>
              )}/>

              <Route exact path="/welcome" render={() => (
                <div>
                  <Welcome email={this.state.email}/>

                  </div>
              )}/>

              <Route exact path="/DisplayUserDetails" render={() => (
                      <div>
                          <DisplayUserDetails results={this.state.results}
                          handleDisplayUser={this.handleDisplayUser}/>
                          <Message message={this.state.message}/>
                      </div>
              )}/>

          </div>
          
      );
  }
}

export default withRouter(NewerHomePage);
