import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Welcome extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        handleLogout: PropTypes.func.isRequired
    };

    state = {
        username : '',
        dirStructure : [],
        path: ' '
    };

    componentWillMount(){
        this.setState({
            username : this.props.username,
              path: ' ',
              dirStructure : []
        });
        //document.title = `Welcome, ${this.state.username} !!`;
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.username} !!`;
    }

    handleListDirectory = (userdata) => {
        API.doGetDirectory(userdata)
            .then((res) => {

              console.log(res);
                this.setState({
                    dirStructure: res
                });
            });
    };

    render(){
      let items = this.state.dirStructure

        return(
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <div className="alert alert-warning" role="alert">
                        {this.state.username}, welcome to my App..!!
                    </div>
                    <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => this.props.handleLogout(this.state)}>
                        Logout
                    </button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <label>Enter folder to list Directory structure:</label>
                    <input className="form-control"
                        type="text"
                        placeholder="Enter filepath"
                        value={this.state.path}
                        onChange={(event) => {
                            this.setState({
                                path: event.target.value
                            });
                        }}
                    />

                     <button className="btn btn-primary"
                          onClick={() => this.props.handleListDirectory(this.state)}>
                          List Directory
                     </button>
                     <br></br>
                     <br></br>
                     <br></br>
                     <ul>
                               <h6>{this.props.dirStructure[0]}</h6>
                               <h6>{this.props.dirStructure[1]}</h6>
                               <h6>{this.props.dirStructure[2]}</h6>
                               <h6>{this.props.dirStructure[3]}</h6>
                               <h6>{this.props.dirStructure[4]}</h6>
                               <h6>{this.props.dirStructure[5]}</h6>
                               <h6>{this.props.dirStructure[6]}</h6>
                               <h6>{this.props.dirStructure[7]}</h6>
                     </ul>
                </div>


            </div>
        )
    }
}

export default Welcome;
