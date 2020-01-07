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


    componentDidMount() {
        console.log('init after rendering');
        console.log(this.props.user);
        this.props.onGetUsers(this.props);
    }


    render() {
        return (
            <div className={css.Authenticate}>
                {
                    this.props.user.users[0] != undefined ?
                        <div className={css.panel}>
                            {
                                this.props.user.users.map(username => (
                                    <DetailedExpansionPanel
                                        username={username}
                                        imageUrl={"http://localhost:4000/images/" + { username } + ".png"}
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
        onGetUsers: (props) => {
            console.log("get all users");
            dispatch(actionCreators.getAllMembersOperation(props));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
