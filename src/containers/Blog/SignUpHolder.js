import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Sign_in from '../../components/authenticate/Sign_in';
import Sign_up from '../../components/authenticate/Sign_up';
import Forget_Password from '../../components/authenticate/Forget_pasword';
import Email_Validation from '../../components/authenticate/Email_validation';
import User_Info from '../../components/authenticate/User_info';
import Steppers from '../../components/authenticate/Steppers';
import css from '../../css/Globale.css'


import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';


class SignUpHolder extends Component {

    userInfo = {
        username: "",
        email: "",
        password: "",
        cfpassword: "",
        state: 0,
        isReady: false,
        isActive: false,
        token: "",
    };




    inputChange = (event) => {
        if (event.target.name == "username") {
            this.userInfo.username = event.target.value;
        } else if (event.target.name == "email") {
            this.userInfo.email = event.target.value;
        } else if (event.target.name == "password") {
            this.userInfo.password = event.target.value;
        } else if (event.target.name == "cfpassword") {
            this.userInfo.cfpassword = event.target.value;
        }
        //console.log(this.userInfo);
    };

    Submite = () => {
        console.log("submit the form");
        if (this.verification()) {
            console.log("----Submit valide-----");
            console.log(this.userInfo);
            this.props.onSignUp(this.userInfo, this.props);
        } else {
            console.log("----Submit not valide----");
        }
    }

    verification = () => {
        if (this.userInfo.username != "" && this.userInfo.email != "") {
            if (this.userInfo.password != "") {
                if (this.userInfo.password == this.userInfo.cfpassword) {
                    return true;
                }
            }
        }
        return false;
    }
    SwitchToSignIn = () => {
        console.log("Switch to SignIn");
        this.props.history.push('/signIn');
    }

    render() {
        return (
            <div className={css.Authenticate} >
                <Sign_up
                    testEvent={this.inputChange}
                    submit={this.Submite}
                    switch={this.SwitchToSignIn}
                ></Sign_up>
                <Steppers step={0}></Steppers>
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
        onAction: (userInfo) => {
            console.log('action activited');
            dispatch(actionCreators.signUpFetch(userInfo));
        },
        onSignUp: (userInfo, props) => {
            console.log('on Signup');
            dispatch(actionCreators.signUpFetch(userInfo, props));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(SignUpHolder);
