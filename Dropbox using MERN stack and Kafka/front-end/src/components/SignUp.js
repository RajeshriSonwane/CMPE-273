import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Link } from 'react-router-dom';
import * as API from '../api/API';
import Message from "./Message";
import About from "./About";

class SignUp extends Component {

    static propTypes = {
        handleSignUp: PropTypes.func.isRequired,
        handleUserDetails: PropTypes.func.isRequired
    };

    state = {
        username: '',
        lastname: '',
        email: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            username: '',
            lastname: '',
            email: '',
            password: ''
        });
    }

    render() {
        return (
          <div className="row justify-content-md-center">

            <div className="col-md-4">

                <form>
                    <div className="form-group">
                        <h1>SignUp</h1>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" label="First Name" placeholder="First Name" value={this.state.username}
                            onChange={(event) => { this.setState({
                                    username: event.target.value
                                });
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <input className="form-control" type="text" label="Last Name" placeholder="Last Name" value={this.state.lastname}
                            onChange={(event) => { this.setState({
                                    lastname: event.target.value
                                });
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <input className="form-control" type="text" label="Email" placeholder="Email ID" value={this.state.email}
                            onChange={(event) => { this.setState({
                                    email: event.target.value
                                });
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <input className="form-control" type="password" label="password" placeholder="Password" value={this.state.password}
                            onChange={(event) => { this.setState({
                                    password: event.target.value
                                });
                            }}
                        />
                    </div>

                    <div className="row">

                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <button className="btn btn-primary" type="button" onClick={() => this.props.handleSignUp(this.state)}>Sign Up</button>
                        </div>

                        <Route exact path="/signup" render={() => (
                          <div className="col-xs-6 col-sm-6 col-md-6">
                            <button className="btn btn-primary" onClick={() => {this.props.history.push("/about");}}> About </button>
                          </div>
                        )}/>
                    </div>

                    <Link to="/login">Back</Link>
                </form>
            </div>
        </div>
        );
    }
}

export default withRouter(SignUp);
