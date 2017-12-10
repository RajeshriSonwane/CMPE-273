import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import dropbox from '../images/dropbox.JPG';

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
        var myStyle = {
            textAlign:'left',
            fontSize: 20
        };
        var myStyle2 = {
            textAlign:'left',
            fontSize: 13
        };
        var myStyle1 = {
            textAlign:'right',
            fontSize: 13
        };
        var sty = {
            float:'left'
        };
        var sty2 = {
            float:'right'
        };
        var wrongPwd ={
            color:'Red'
        };
        return (
            <div>
                <div className='nav' style={{"marginLeft" : "278px"}}>
                    <img src={dropbox} />
                </div>

                <div className='article'>

                    <h4 className='col-md-6' style={myStyle}>Sign in</h4>
                    <h4 style={myStyle1}> or <a href='/Signup'>create an account</a></h4>

                    <div className="row justify-content-md-center">
                        <div className="col-md-10">
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
                                    <div className="checkbox">
                                        <label style={sty}><input style={myStyle2} type="checkbox" name="remember" />Remember me</label>
                                        <button className="btn btn-primary" type="button" onClick={() => this.props.handleSubmit(this.state)}>Sign in</button>
                                    </div>
                                </div>
                            </form>
                            <div><a href='#'> <h4 style={myStyle2}>Forgot your password?</h4></a></div>
                            <br/><br/> <h3 style={wrongPwd}>{this.state.message}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
