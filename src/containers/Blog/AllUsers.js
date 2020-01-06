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
import DetailedExpansionPanel from '../../materials/ExpensionPanle/ExpensionPanle';


class AllUsers extends Component {

    render() {
        return (
            <div className={css.Authenticate}>

                <div className={css.panel}>
                    <DetailedExpansionPanel
                        username={"Mohamed"}
                        imageUrl={"http://localhost:4000/images/Mohamed.png"}
                    ></DetailedExpansionPanel>
                    <DetailedExpansionPanel
                        username={"Boushaba"}
                        imageUrl={"http://localhost:4000/images/Boushaba.png"}
                    ></DetailedExpansionPanel>

                </div>

            </div >

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
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
