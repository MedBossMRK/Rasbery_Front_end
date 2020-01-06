import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Sign_in from '../../components/authenticate/Sign_in';
import Sign_up from '../../components/authenticate/Sign_up';
import Forget_Password from '../../components/authenticate/Forget_pasword';
import Email_Validation from '../../components/authenticate/Email_validation';
import Rasbery_Connect from '../../components/Rasbery/Rasbery_Connect';
import Steppers from '../../components/authenticate/Steppers';
import css from '../../css/Globale.css'


import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import SendInviation from '../../components/Rasbery/SendInvitation';


class SendInvitationHnadler extends Component {





    render() {
        return (
            <div className={css.Authenticate}>
                <SendInviation

                ></SendInviation>
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

    };
};



export default connect(mapStateToProps, mapDispatchToProps)(SendInvitationHnadler);
