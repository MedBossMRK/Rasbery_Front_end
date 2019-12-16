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


const axios = require('axios');


class UserInfoHandler extends Component {
    userInfopersonal = {
        firstname: "",
        lastname: "",
        address: "",
    };
    constructor(props) {
        super(props);
        this.state = {
            FileName: "Uplaod your image here",
            File: null,
        };

    }

    inputChange = (event) => {
        if (event.target.name == "firstname") {
            this.userInfopersonal.firstname = event.target.value;
        } else if (event.target.name == "lastname") {
            this.userInfopersonal.lastname = event.target.value;
        } else if (event.target.name == "address") {
            this.userInfopersonal.address = event.target.value;
        }
    };


    fileSelect = (event) => {
        this.setState({
            FileName: event.target.files[0].name,
            File: event.target.files[0],
        });
        console.log(event.target.files[0]);

    };


    Submite = () => {
        console.log("submit the form");
        console.log(this.userInfopersonal);
        if (this.verification()) {
            console.log("----Submit valide-----");
            const fd = new FormData();
            fd.append('PictureData', this.state.File);
            fd.append('firstname', this.userInfopersonal.firstname);
            fd.append('lastname', this.userInfopersonal.lastname);
            fd.append('address', this.userInfopersonal.address);
            this.props.onSignUpUserInfo(fd, this.props);
        } else {
            console.log("----Submit not valide----");
        }
    }

    verification = () => {
        if (this.userInfopersonal.address != "" && this.userInfopersonal.firstname != "") {
            if (this.userInfopersonal.lastname != "") {
                if (this.state.File != null) {
                    return true;
                }
            }
        }
        return false;
    }



    render() {
        return (
            <div className={css.Authenticate}>
                <User_Info
                    fileChange={this.fileSelect}
                    fileName={this.state.FileName}
                    submit={this.Submite}
                    inputchange={this.inputChange}
                ></User_Info>
                <Steppers step={2}></Steppers>
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
        onSignUpUserInfo: (fd, props) => {
            console.log('user info registring');
            dispatch(actionCreators.userInfoRegistering(fd, props));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(UserInfoHandler);
