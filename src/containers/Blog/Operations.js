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
import socketIOClient from "socket.io-client";
import { Url } from '../../properties/properties';

class Operations extends Component {
    endpoint = Url;
    componentDidMount() {
        console.log('init after rendering');

        const socket = socketIOClient(this.endpoint);
        socket.on("test", data => {
            console.log(":::::::::::::::start test:::::::::::::::::::");
            console.log(data);
            console.log(":::::::::::::::end test ::::::::::::::")
        });

        socket.on("turnOn", () => {
            console.log(":::::::::::::::start turn on runtime:::::::::::::::::::");
            this.props.onTurnOnRuntime();
            console.log(":::::::::::::::end trun on runtime ::::::::::::::")
        });

        socket.on("turnOff", () => {
            console.log(":::::::::::::::start turn off runtime:::::::::::::::::::");
            this.props.onTurnOffRuntime();
            console.log(":::::::::::::::end turn off runtime ::::::::::::::")
        });

        socket.on("wait", () => {
            console.log(":::::::::::::::start wait:::::::::::::::::::");
            this.props.onWaitfRuntime();
            console.log(":::::::::::::::end wait ::::::::::::::")
        });


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
                    keyWait={this.props.user.keyWait}
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
        },
        // for the runtime socket io**********************************/

        onTurnOnRuntime: () => {
            console.log("on turn on runtime process");
            dispatch(actionCreators.TurnOnMotor());
        },
        onTurnOffRuntime: () => {
            console.log("on turn off runtime process");
            dispatch(actionCreators.TurnOffMotor());
        },
        onWaitfRuntime: () => {
            console.log("on wait process");
            dispatch(actionCreators.waitMotor());
        },

        // for getting authority of user

        onGetAuthority: () => {
            console.log("get authority");
        },

    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Operations);
