import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link,withRouter} from 'react-router-dom';

class DisplayUserDetails extends Component {

    static propTypes = {
        DisplayUserDetails: PropTypes.func.isRequired,
          results: PropTypes.string.isRequired
    };

    state = {
        results : this.props.results,
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
          results : this.props.results,
          userOverview: '',
          work: '',
          education: '',
          ContactNo: '',
          lifeEvents: '',
          interests: ''
        });
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.results} !!`;
    }

    render() {
        return (
          <div className="row justify-content-md-center">
            <div className="col-md-4">
                <form>
                <div>
                    {this.state.results}
                </div>

                    <h1></h1>

                    <Link to="/welcome">Back</Link>
                </form>
            </div>
        </div>
        );
    }
}

export default DisplayUserDetails;
