import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect, Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Authenticate from './Blog/Authenticate';
import Home from './Blog/Home';
import Error404 from './Blog/404';
import Nav_bar from './Blog/Nav-bar';
import Sign_in from '../components/authenticate/Sign_in';
import SingInHolder from './Blog/SingInHolder';
import SignUpHolder from './Blog/SignUpHolder';
import EmailValidationHolder from './Blog/EmailValidationHolder';
import UserInfoHandler from './Blog/UserInfoHandler';
import ValidateEmail from './Blog/ValidateEmail';
import RasberyConnect from './Blog/RasberyConnect';


import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';
import AllUsers from './Blog/AllUsers';
import SendInvitationHandler from './Blog/SendInvitationHandler';
import { createBrowserHistory as createHistory } from "history";
import validateInvitation from './Blog/validateInvitation';
import Notification from './Blog/Notification';
import Operations from './Blog/Operations';



class Blog extends Component {
    history = createHistory(this.props);

    render() {
        return (
            <div>
                <header>
                    <Route component={Nav_bar} />
                </header>
                <Switch>




                    {!this.props.user.isActive ?
                        <Route path="/SignIn" exact component={SingInHolder} />
                        : <Route path="/SignIn" exact render={() => <h1>you have to logout first</h1>}>
                        </Route>
                    }
                    {!this.props.user.isActive ?
                        <Route path="/SignUp" exact component={SignUpHolder} />
                        : <Route path="/SignUp" exact render={() => <h1>you have to logout first</h1>}>
                        </Route>
                    }
                    {this.props.user.state == 1 ?
                        <Route path="/EmailValidation" exact component={EmailValidationHolder} />
                        : <Route path="/EmailValidation" exact render={() => <h1>your state is not correct</h1>}>
                        </Route>
                    }
                    {this.props.user.state == 2 ?
                        <Route path="/UserInfo" exact component={UserInfoHandler} />
                        : <Route path="/UserInfo" exact render={() => <h1>your state is not correct</h1>}>
                        </Route>
                    }
                    {this.props.user.isReady ?
                        <Route path="/RasberyConnect" exact component={RasberyConnect} />
                        : <Route path="/RasberyConnect" exact render={() => <h1>your are not ready</h1>}>
                        </Route>
                    }
                    {this.props.user.isReady && this.props.user.authority == "admin" ?
                        <Route path="/AllUsers" exact component={AllUsers} />
                        : <Route path="/AllUsers" exact render={() => <h1>your are not allowed</h1>}>
                        </Route>
                    }
                    {this.props.user.isReady && this.props.user.authority == "admin" ?
                        <Route path="/SendInviation" exact component={SendInvitationHandler} />
                        : <Route path="/SendInviation" exact render={() => <h1>your are not allowed</h1>}>
                        </Route>
                    }

                    {this.props.user.isReady &&
                        (this.props.user.authority == "member" || this.props.user.authority == "admin") ?
                        <Route path="/Notification" exact component={Notification} />
                        : <Route path="/Notification" exact render={() => <h1>your are not allowed</h1>}>
                        </Route>
                    }
                    {this.props.user.isReady &&
                        (this.props.user.authority == "member" || this.props.user.authority == "admin") ?
                        <Route path="/Operations" exact component={Operations} />
                        : <Route path="/Operations" exact render={() => <h1>your are not allowed</h1>}>
                        </Route>
                    }

                    {this.props.user.isActive ?
                        <Route path="/Home" exact component={Home} /> :
                        <Route render={() => <h1>you are not connected</h1>}>
                        </Route>
                    }
                    {this.props.user.isActive ?
                        <Route path="/" exact component={Home} /> :
                        <Route render={() => <h1>you are not connected</h1>}>
                        </Route>
                    }

                    <Route path="/ValidateEmail/:token" exact component={ValidateEmail} />
                    <Route path="/ValidateInvitation/:token" exact component={validateInvitation} />

                    <Route component={Error404} />

                </Switch>


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
        onAction: () => {
            console.log('action activited');
            dispatch(actionCreators.signInFetch());
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Blog);
