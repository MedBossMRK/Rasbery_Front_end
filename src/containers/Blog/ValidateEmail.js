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


class ValidateEmail extends Component {

    render() {
        return (
            <div className={css.Authenticate}>
                <Email_Validation type={'after'}></Email_Validation>
                <Steppers step={1}></Steppers>
            </div>

        );
    }

    componentDidMount() {
        console.log('init after rendering');
        console.log("token from the parametre");
        console.log(this.props.match.params.token);
        this.props.onValidateEmail(this.props.match.params.token, this.props);
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
        onValidateEmail: (token, props) => {
            console.log('validate Email');
            dispatch(actionCreators.ValidateEmail(token, props))
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(ValidateEmail);
