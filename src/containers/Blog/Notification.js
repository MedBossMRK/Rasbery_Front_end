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
import DetailedExpansionPanel from '../../materials/ExpensionPanle/ExpensionPanel1';
import { Url } from '../../properties/properties';


class Notification extends Component {

    componentDidMount() {
        console.log('init after rendering');
        if (this.props.user.authority == "admin") {
            this.props.onGetNotificationsAdmin(this.props);
        } else if (this.props.user.authority == "member") {
            this.props.onGetNotificationsMember(this.props);
        } else {
            console.log("you are not allow");
        }
    }


    render() {
        return (
            <div className={css.Authenticate}>
                {
                    this.props.user.notifications[0] != undefined ?
                        <div className={css.panel}>
                            {
                                this.props.user.notifications.map(notif => (

                                    < DetailedExpansionPanel

                                        username={notif.sendername}
                                        message={notif.message}
                                        imageUrl={Url + "/images/" + notif.sendername + ".png"}
                                    ></DetailedExpansionPanel>
                                ))
                            }
                        </div>
                        :
                        <h1>wait ...</h1>

                }

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
        onGetNotificationsAdmin: (props) => {
            console.log("get all notifications admin");
            dispatch(actionCreators.getAllNotificationsOperationAdmin(props));
        },
        onGetNotificationsMember: (props) => {
            console.log("get all notifications member");
            dispatch(actionCreators.getAllNotificationsOperationMember(props));
        },

    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Notification);
