import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Sign_in from '../../components/authenticate/Sign_in';
import Sign_up from '../../components/authenticate/Sign_up';
class Authenticate extends Component {

    render() {
        return (
            <div>
                <p> Authenticate</p>
                <Sign_in></Sign_in>
                <Sign_up></Sign_up>
            </div>

        );
    }
}

export default Authenticate;
