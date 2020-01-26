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


class SignInHolder extends Component {
    userLogin = {
        username: "",
        password: "",
    };


    inputChange = (event) => {
        if (event.target.name == "username") {
            this.userLogin.username = event.target.value;
        } else if (event.target.name == "password") {
            this.userLogin.password = event.target.value;
        }
        // console.log(this.userLogin);
    };


    Submite = () => {
        console.log("submit the form");
        if (this.verification()) {
            console.log("----Submit valide-----");
            console.log(this.userLogin);
            this.props.onSignIn(this.userLogin, this.props);
        } else {
            console.log("----Submit not valide----");
        }

    }

    verification = () => {
        if (this.userLogin.username != "" && this.userLogin.password != "") {
            return true;
        }
        return false;
    }

    ForgetPassword = () => {
        console.log("ForgetPassword");
        this.props.history.push('/ForgetPassword');
    }

    SwitchToSignUp = () => {
        console.log("Switch to SignUp");
        this.props.history.push('/signUp');
    }
    render() {
        return (
            <div className={css.Authenticate}>
                <Sign_in
                    inputChange={this.inputChange}
                    submit={this.Submite}
                    forgetPassword={this.ForgetPassword}
                    switch={this.SwitchToSignUp}
                ></Sign_in>
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

        onSignIn: (userLogin, props) => {
            console.log('sign in');
            dispatch(actionCreators.signInFetch(userLogin, props));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(SignInHolder);
