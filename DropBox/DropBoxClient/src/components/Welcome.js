import React, {Component} from 'react';
import {Route, Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import Message from "./Message";
import DisplayUserDetails from "./DisplayUserDetails";
//import ImageGridList from "./ImageGridList";
//import TextField from 'material-ui/TextField';

class Welcome extends Component {

/*  constructor() {
    super();
    this.state = {
        images: []
    };
  }
  */

    static propTypes = {
        email: PropTypes.string.isRequired
    //    handleListDirectory: PropTypes.func.isRequired
    };

    state = {
        email : ''
    //    dirpath : ''
    };

    componentWillMount(){
        this.setState({
            email : this.props.email
    //        dirpath : this.props.dirpath
        });
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.email} !!`;
  /*      API.getImages()
           .then((data) => {
               console.log(data);
               this.setState({
                   images: data
               });
           });  */
    }

    render(){
        return(
            <div className="row justify-content-md-center">
                <div className="col-md-10">
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

                    <input
                        className="form-control"
                        type="text"
                        label="Enter folder to list Directory structure:"
                        placeholder="Enter path to directory"
                        value={this.state.dirpath}
                        onChange={(event) => {
                            this.setState({
                                dirpath: event.target.value
                            });
                        }}
                      />

                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.props.handleListDirectory(this.state)}>
                        Submit
                    </button>
                    <hr></hr>

                    <input
                        className={'fileupload'}
                        type="file"
                        name="myfile"
                        onChange={this.handleFileUpload}
                    />

                </div>
            </div>
        )
    }
}

export default withRouter(Welcome);
