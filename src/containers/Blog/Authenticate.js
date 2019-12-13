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


class Authenticate extends Component {

    render() {
        return (
            <div className={css.Authenticate}>
                <Forget_Password action={this.props.onAction} ></Forget_Password>
                <Steppers></Steppers>
            </div>

        );
    }
}


const mapStateToProps = state => {
    console.log(state.user);
    //console.log(state.getstate());
    return state;
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



export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
