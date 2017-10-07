import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link,withRouter} from 'react-router-dom';

class DisplayUserDetails extends Component {

    static propTypes = {
        DisplayUserDetails: PropTypes.func.isRequired,
          email: PropTypes.string.isRequired
    };

    state = {
        email : '',
        userOverview: '',
        work: '',
        education: '',
        ContactNo: '',
        lifeEvents: '',
        interests: ''
    };

    componentWillMount(){
        this.setState({
          email : this.props.email,
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
            <div className="col-md-10">
                <form>
                    <div className="form-group">
                        <h1> User Details</h1>
                    </div>

                    <h1>res.UserID</h1>
                    <Link to="/welcome">Back</Link>
                </form>
            </div>
        </div>
        );
    }
}

export default DisplayUserDetails;
