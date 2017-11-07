import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Message from "./Message";
import About from "./About";

class SignUp extends Component {

    static propTypes = {
        handleSignUp: PropTypes.func.isRequired
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
                        <h3>SignUp</h3>
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            label="First Name"
                            placeholder="First Name"
                            value={this.state.username}
                            onChange={(event) => {
                                this.setState({
                                    username: event.target.value
                                });
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            label="Last Name"
                            placeholder="Last Name"
                            value={this.state.lastname}
                            onChange={(event) => {
                                this.setState({
                                    lastname: event.target.value
                                });
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            label="Email"
                            placeholder="Email ID"
                            value={this.state.email}
                            onChange={(event) => {
                                this.setState({
                                    email: event.target.value
                                });
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            label="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={(event) => {
                                this.setState({
                                    password: event.target.value
                                });
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => this.props.handleSignUp(this.state)}>
                            Sign Up
                        </button>
                    </div>
                    <Link to="/Login">Back</Link>
                </form>
            </div>
        </div>
        );
    }
}

export default withRouter(SignUp);
