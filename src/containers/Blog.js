import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Authenticate from './Blog/Authenticate';
import Home from './Blog/Home';
import Error404 from './Blog/404';
import Nav_bar from './Blog/Nav-bar';
import Sign_in from '../components/authenticate/Sign_in';
import SingInHolder from './Blog/SingInHolder';
import SignUpHolder from './Blog/SignUpHolder';
import EmailValidationHolder from './Blog/EmailValidationHolder';
import UserInfoHandler from './Blog/UserInfoHandler';


import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';



class Blog extends Component {

    render() {
        return (
            <div>
                <header>
                    <Nav_bar></Nav_bar>
                </header>
                <Switch>
                    <Route path="/SignIn" exact component={SingInHolder} />
                    <Route path="/SignUp" exact component={SignUpHolder} />
                    <Route path="/EmailValidation" exact component={EmailValidationHolder} />
                    <Route path="/UserInfo" exact component={UserInfoHandler} />
                    {this.props.user.isActive ? <Route path="/Home" exact component={Home} /> :
                        <Route render={() => <h1>you are not connected</h1>}></Route>}
                    <Route path="/" exact component={Home} />
                    <Route component={Error404} />

                </Switch>

            </div>

        );
    }
}


const mapStateToProps = state => {
    console.log(state.user);
    return {
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => {
    console.log('set up dispatch');
    return {
        onAction: () => {
            console.log('action activited');
            dispatch(actionCreators.signInFetch());
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Blog);
