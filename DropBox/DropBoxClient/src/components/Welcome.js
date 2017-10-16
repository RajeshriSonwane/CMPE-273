import React, {Component} from 'react';
import {Route, Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import Message from "./Message";
import DisplayUserDetails from "./DisplayUserDetails";

class Welcome extends Component {

    static propTypes = {
        email: PropTypes.string.isRequired
    };

    state = {
        email : ''
    };

    componentWillMount(){
        this.setState({
            email : this.props.email
        });
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.email} !!`;
    }

    render(){
        return(
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                    <div className="alert alert-warning" role="alert">
                        {this.state.email}, welcome to my App..!!
                    </div>
                    <Link to="/login">Logout</Link>
                    <hr></hr>

                    <Route exact path="/welcome" render={() => (
                        <div className="col-sm-6" >
                            <button className="btn btn-success"  onClick={() => {
                                    this.props.history.push("/DisplayUserDetails");
                                }}>
                            User Details
                            </button>
                        </div>
                    )}/>

                    <Route exact path="/DisplayUserDetails" render={() => (
                            <div>
                                this.props.handleUserDetails(this.state),
                                <DisplayUserDetails handleDisplayUser={this.handleDisplayUser}/>
                                <Message message={this.state.message}/>
                            </div>
                    )}/>
                      <hr></hr>
                      <h5>Select file to upload</h5>
                    <input
                       className={'fileupload'}
                       type="file"
                       name="myfile"
                       onChange={this.handleFileUpload}
                   />
                   <button>Upload</button>

                </div>
            </div>
        )
    }
}

export default withRouter(Welcome);
