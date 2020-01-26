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


class RequestPasswordForgetten extends Component {
    userLogin = {
        email: "",

    };


    inputChange = (event) => {
        if (event.target.name == "email") {
            this.userLogin.email = event.target.value;
        }
        // console.log(this.userLogin);
    };


    Submite = () => {
        console.log("submit the form");
        if (this.verification()) {
            console.log("----Submit valide-----");
            console.log(this.userLogin);
            this.props.onSendEmail(this.userLogin, this.props);
        } else {
            console.log("----Submit not valide----");
        }

    }
    ReturnBack = () => {
        console.log("return back");
        this.props.history.push('/signIn');
    }

    verification = () => {
        if (this.userLogin.email != "") {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className={css.Authenticate}>
                <Forget_Password
                    inputChange={this.inputChange}
                    submit={this.Submite}
                    returnBack={this.ReturnBack}
                ></Forget_Password>
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

        onSendEmail: (userLogin, props) => {
            console.log('request for a update a password via email');
            dispatch(actionCreators.requestForgetPasswordProcess(props, userLogin));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(RequestPasswordForgetten);
