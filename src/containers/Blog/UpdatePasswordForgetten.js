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
import UpdatePasswordForgettenTemplet from '../../components/UpdateElements/UpdatePasswordForgettenTemplet';


class UpdatePasswordForgetten extends Component {
    data = {
        token: "",
        password: "",
        cfpassword: "",
    };

    componentDidMount() {
        console.log(this.props.match.params.token);
        this.data.token = this.props.match.params.token;
    }

    inputChange = (event) => {
        if (event.target.name == "password") {
            this.data.password = event.target.value;
        } else if (event.target.name == "cfpassword") {
            this.data.cfpassword = event.target.value;
        }
        // console.log(this.data);
    };


    Submite = () => {
        console.log("submit the form");
        if (this.verification()) {
            console.log("----Submit valide-----");
            console.log(this.data);
            this.props.onSubmit(this.data, this.props);
        } else {
            console.log("----Submit not valide----");
        }

    }

    verification = () => {
        if (this.data.token != "" &&
            this.data.password != "" &&
            this.data.cfpassword != "") {
            if (this.data.password == this.data.cfpassword) {
                return true;
            }

        }
        return false;
    }

    render() {
        return (
            <div className={css.Authenticate}>
                <UpdatePasswordForgettenTemplet
                    inputChange={this.inputChange}
                    submit={this.Submite}>

                </UpdatePasswordForgettenTemplet>
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

        onSubmit: (data, props) => {
            console.log('update password ');
            dispatch(actionCreators.requestUpdateForgetPasswordProcess(props, data));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(UpdatePasswordForgetten);
