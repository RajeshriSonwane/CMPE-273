import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link,withRouter} from 'react-router-dom';

class DisplayUserDetails extends Component {

    static propTypes = {
        DisplayUserDetails: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    };

    state = {
        username: '',
        lastname: '',
        email: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
           username: this.props.username,
           lastname: this.props.lastname,
           email: this.props.email,
           password: this.props.password,
        });
    }

    render() {
        return (
          <div className="row justify-content-md-center">
            <div className="col-md-4">
                <form>
                    <h2>User Information</h2>
                    <h6>User Name:{this.state.username}</h6>
                    <h6>Last Name:{this.state.lastname}</h6>
                    <h6>Email:{this.state.email}</h6>
                    <h6>password:{this.state.password}</h6>

                    <Link to="/welcome">Back</Link>
                </form>
            </div>
        </div>
        );
    }
}

export default DisplayUserDetails;
