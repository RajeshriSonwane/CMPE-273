import React, {Component} from 'react';
import {Route, Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import Message from "./Message";
import DisplayUserDetails from "./DisplayUserDetails";

class Welcome extends Component {

    static propTypes = {
          email: PropTypes.string.isRequired,
          username: PropTypes.string.isRequired,
          lastname: PropTypes.string.isRequired,
          password: PropTypes.string.isRequired,
          handleDisplayUser: PropTypes.func.isRequired
    };

    state = {
       username: '',
       lastname: '',
       email: '',
       password: '',
    };

    componentWillMount(){
        this.setState({
            username: this.state.username,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
        });
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.email} !!`;
    }

    render(){
        return(
          <div>
          <div className='hometab'>
          <Route exact path="/welcome" render={() => (
              <div className="col-sm-6" >
                  <text className="btn btn-success"  onClick={() => {
                          this.props.history.push("/DisplayUserDetails"),
                          this.props.handleDisplayUser(this.state);
                      }}>
                  User Details
                  </text>
              </div>
          )}/>

          <Route exact path="/DisplayUserDetails" render={() => (
                  <div>
                      <DisplayUserDetails handleDisplayUser={this.handleDisplayUser} username={this.state.username} lastname={this.state.lastname}
                      email={this.state.email} password={this.state.password}/>
                  </div>
          )}/>

          <div className="col-md-4">
            <Link to="/login">Logout</Link>
          </div>
        </div>

          <div className='homecontent'>
            <div className="row justify-content-md-center">
              <div className="col-md-4">
                <div className="alert alert-warning" role="alert">
                  {this.state.email}, welcome to my App..!!
                </div>
                <hr></hr>
              </div>
            </div>
          </div>

          <div className='hometab2'>
                <div className="row justify-content-md-center">
                  <h5>Select file to upload</h5>
                  <input className={'fileupload'} type="file" name="myfile" onChange={this.handleFileUpload}/>
                  <button>Upload</button>
                </div>
          </div>
        </div>
        )
    }
}

export default withRouter(Welcome);
