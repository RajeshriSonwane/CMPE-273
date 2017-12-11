import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import * as API from '../api/API';

class About extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired
    };

    state = {
        username: '',
        userOverview: '',
        work: '',
        education: '',
        ContactNo: '',
        lifeEvents: '',
        interests: ''
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
            userOverview: '',
            work: '',
            education: '',
            ContactNo: '',
            lifeEvents: '',
            interests: ''
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                    <form>
                        <div className="form-group">
                            <h1>Enter User Info</h1>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" label="userOverview"
                                   placeholder="Enter Overview"
                                   value={this.state.userOverview} onChange={(event) => {
                                this.setState({
                                    userOverview: event.target.value
                                });
                            }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control" type="text" label="Work" placeholder="Enter Work"
                                value={this.state.work}
                                onChange={(event) => {
                                    this.setState({
                                        work: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control" type="text" label="Education" placeholder="Enter Education"
                                value={this.state.education}
                                onChange={(event) => {
                                    this.setState({
                                        education: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control" type="number" label="ContactNo" placeholder="Enter Contact No"
                                value={this.state.ContactNo}
                                onChange={(event) => {
                                    this.setState({
                                        ContactNo: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control" type="text" label="lifeEvents" placeholder="Enter Life Events"
                                value={this.state.lifeEvents}
                                onChange={(event) => {
                                    this.setState({
                                        lifeEvents: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control" type="text" label="interests" placeholder="Enter interests"
                                value={this.state.interests}
                                onChange={(event) => {
                                    this.setState({
                                        interests: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-primary" type="button"
                                onClick={() => this.handleUserDetails(this.state)}>
                                Submit
                            </button>
                        </div>
                        <Link to="/UserAccount">Back</Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default About;
