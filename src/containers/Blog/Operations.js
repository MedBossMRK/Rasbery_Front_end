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
import Operation from '../../components/authenticate/Operation';


class Operations extends Component {

    Submit = () => {
        console.log("submit");
        if (this.props.user.authority == "admin") {
            this.props.onSubmitAdmin(this.props);
        } else if (this.props.user.authority == "member") {
            this.props.onSubmitMember(this.props);
        } else {
            console.log("you are not allowed");
        }

    }

    render() {
        return (
            <div className={css.Authenticate}>
                <Operation submit={this.Submit}></Operation>
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
        onSubmitAdmin: (props) => {
            console.log("on submit operation admin");
            dispatch(actionCreators.TurnOnMotorOperationAdmin(props));
        },
        onSubmitMember: (props) => {
            console.log("on submit operation member");
            dispatch(actionCreators.TurnOnMotorOperationMember(props));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Operations);
