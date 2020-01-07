import React, { Component } from 'react';
import Nav_bar_component from '../../components/nav-bar/nav-bar-component';
import Drawer_component from '../../components/nav-bar/Drawer_component';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';




class Nav_bar extends Component {


    state = {
        toggleDrawer: false
    }

    ToggleDrawer = () => {
        console.log("toggle drawer");
        let toggle = { ... this.state }
        toggle.toggleDrawer = !toggle.toggleDrawer;
        this.setState(toggle);
        //console.log(toggle.toggleDrawer);
    }
    ItemSelected = (e, name) => {
        console.log("Item Selected");
        e.stopPropagation();
        console.log(name);
        if (name == "Home") {
            console.log("Home");
            this.props.history.push('/');
        } else if (name == "Connect") {
            console.log("Connect");
            this.props.history.push('/RasberyConnect');
        } else if (name == "Users") {
            console.log("users");
            this.props.history.push('/AllUsers');
        } else if (name == "SendInvitation") {
            console.log("SendInvitation");
            this.props.history.push('/SendInviation');
        } else if (name == "Operations") {
            console.log("Operations");
            this.props.history.push('/Operations');
        } else if (name == "Sign In") {
            console.log("Sign In");
            this.props.history.push('/signIn');
        } else if (name == "Sign Up") {
            console.log("Sign Up");
            this.props.history.push('/signUp');
        } else if (name == "ValidateEmail") {
            console.log("ValidateEmail");
            this.props.history.push('/EmailValidation');
        } else if (name == "Profile") {
            console.log("Profile");
            this.props.history.push('/UserInfo');
        } else if (name == "Notification") {
            console.log("Notification");
            this.props.history.push('/Notification');
            // this.ToggleDrawer();
        } else if (name == "Log Out") {
            console.log("Log out");
            this.props.onLogOut(this.props);
        }

        let toggle = { ... this.state }
        toggle.toggleDrawer = !toggle.toggleDrawer;
        this.setState(toggle);
    }


    OpenDrawer = () => {
        console.log("open drawer");
        let toggle = { ... this.state }
        toggle.toggleDrawer = true;
        this.setState(toggle);
    }
    CloseDrawer = () => {
        console.log("close drawer");
        let toggle = { ... this.state }
        toggle.toggleDrawer = false;
        this.setState(toggle);
    }
    DrawerClicked = () => {
        console.log("drawer clicked");
        let toggle = { ... this.state }
        toggle.toggleDrawer = false;
        this.setState(toggle);
    }

    render() {

        return (
            <div>
                <Nav_bar_component
                    Toggle={this.ToggleDrawer}
                    isActive={this.props.user.isActive}
                    ItemSelected={this.ItemSelected}
                >

                </Nav_bar_component>
                <h1>huik</h1>
                <Drawer_component
                    isActive={this.props.user.isActive}
                    status={this.props.user.state}
                    Toggle={this.ToggleDrawer}
                    ToggleKey={this.state.toggleDrawer}
                    DrawerClick={this.DrawerClicked}
                    ItemSelected={this.ItemSelected}
                >

                </Drawer_component>
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
        onLogOut: (props) => {
            console.log('on Signup');
            dispatch(actionCreators.onLogOutOperation(props));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Nav_bar);
