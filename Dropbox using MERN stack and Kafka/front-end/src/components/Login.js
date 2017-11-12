import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import dropbox from './dropbox.JPG';

class Login extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        return (
          <div>
            <div className='nav'>
                <img src={dropbox} />
            </div>

            <div className='article'>
              <h4 className='col-md-6'>Sign in</h4>

                <div className="row justify-content-md-center">
                  <div className="col-md-8">
                    <form>
                        <div className="form-group">
                            <input className="form-control" type="text" label="Username" placeholder="Enter Username" value={this.state.username}
                                onChange={(event) => { this.setState({
                                        username: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input className="form-control" type="password" label="password" placeholder="Enter Password" value={this.state.password}
                                onChange={(event) => { this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <button className="btn btn-primary" type="button" onClick={() => this.props.handleSubmit(this.state)}>Sign in</button>
                            </div>

                            <div className="col-xs-6 col-sm-6 col-md-6">
                                  <Link to="/SignUp" >
                                          <button className="btn btn-primary" type="button">Sign Up</button>
                                  </Link>
                            </div>
                        </div>
                    </form>
                  </div>
                </div>
             </div>
          </div>
        );
    }
}

export default Login;
