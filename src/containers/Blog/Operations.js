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

    componentDidMount() {
        console.log('init after rendering');
        if (this.props.user.authority == "admin") {
            this.props.onGetMotorStatusAdmin(this.props);
        } else if (this.props.user.authority == "member") {
            this.props.onGetMotorStatusMember(this.props);
        } else {
            console.log("you are not allow");
        }

    }



    Submit = () => {
        console.log("submit");
        if (this.props.user.authority == "admin") {
            if (this.props.user.motorStatus) {
                this.props.onSubmitOffAdmin(this.props);
            } else {
                this.props.onSubmitOnAdmin(this.props);
            }

        } else if (this.props.user.authority == "member") {
            if (this.props.user.motorStatus) {
                this.props.onSubmitOffMember(this.props);
            } else {
                this.props.onSubmitOnMember(this.props);
            }
        } else {
            console.log("you are not allowed");
        }

    }

    render() {
        return (
            <div className={css.Authenticate}>
                <Operation
                    submit={this.Submit}
                    operation={this.props.user.motorStatus}
                ></Operation>
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
        onGetMotorStatusMember: (props) => {
            console.log(":::::get motor status member::::::");
            dispatch(actionCreators.getMotorStatusOperationMember(props));
        },
        onGetMotorStatusAdmin: (props) => {
            console.log(":::::get motor status admin::::::");
            dispatch(actionCreators.getMotorStatusOperationAdmin(props));
        },
        onSubmitOnAdmin: (props) => {
            console.log("on submit on operation admin");
            dispatch(actionCreators.TurnOnMotorOperationAdmin(props));
        },
        onSubmitOnMember: (props) => {
            console.log("on submit on operation member");
            dispatch(actionCreators.TurnOnMotorOperationMember(props));
        },
        onSubmitOffAdmin: (props) => {
            console.log("on submit off operation admin");
            dispatch(actionCreators.TurnOffMotorOperationAdmin(props));
        },
        onSubmitOffMember: (props) => {
            console.log("on submit off operation member");
            dispatch(actionCreators.TurnOffMotorOperationMember(props));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Operations);
