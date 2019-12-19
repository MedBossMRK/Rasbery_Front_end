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


class RasberyConnect extends Component {
    rasberyInfo = {
        rasberyId: "",
        rasberyKey: "",
    };

    inputChange = (event) => {
        if (event.target.name == "RasberyId") {
            this.rasberyInfo.rasberyId = event.target.value;
        } else if (event.target.name == "RasberyPassword") {
            this.rasberyInfo.rasberyKey = event.target.value;
        }
        // console.log(this.rasberyInfo);
    };

    Submite = () => {
        console.log("submit the form");
        if (this.verification()) {
            console.log("----Submit valide-----");
            console.log(this.rasberyInfo);
            this.props.onRasberySignUp(this.rasberyInfo, this.props);
        } else {
            console.log("----Submit not valide----");
        }

    }

    verification = () => {
        if (this.rasberyInfo.RasberyId != "" && this.rasberyInfo.RasberyPassword != "") {
            return true;
        }
        return false;
    }


    render() {
        return (
            <div className={css.Authenticate}>
                <Rasbery_Connect
                    inputChange={this.inputChange}
                    submit={this.Submite}></Rasbery_Connect>
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
        onRasberySignUp: (rasberyInfo, props) => {
            console.log('Rasbery SignUp...');
            dispatch(actionCreators.rasberySignUpFetch(rasberyInfo, props));
        },
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(RasberyConnect);
