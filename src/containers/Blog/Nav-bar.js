import React, { Component } from 'react';
import Nav_bar_component from '../../components/nav-bar/nav-bar-component';
import Drawer_component from '../../components/nav-bar/Drawer_component';


class Nav_bar extends Component {
    state = {
        toggleDrawer: false
    }

    ToggleDrawer = () => {
        //   console.log("toggle drawer");
        let toggle = { ... this.state }
        toggle.toggleDrawer = !toggle.toggleDrawer;
        this.setState(toggle);
        //console.log(toggle.toggleDrawer);
    }
    ItemSelected = (e, name) => {
        console.log("Item Selected");
        e.stopPropagation();
        console.log(name);

        let toggle = { ... this.state }
        toggle.toggleDrawer = !toggle.toggleDrawer;
        this.setState(toggle);
    }


    OpenDrawer = () => {
        //  console.log("toggle drawer");
        let toggle = { ... this.state }
        toggle.toggleDrawer = true;
        this.setState(toggle);
    }
    CloseDrawer = () => {
        //    console.log("toggle drawer");
        let toggle = { ... this.state }
        toggle.toggleDrawer = false;
        this.setState(toggle);
    }
    DrawerClicked = () => {
        //  console.log("drawer clicked");
        let toggle = { ... this.state }
        toggle.toggleDrawer = false;
        this.setState(toggle);
    }

    render() {
        const divStyle = {
            color: 'black',
            heigh: '400px',
        };
        return (
            <div>
                <Nav_bar_component Toggle={this.ToggleDrawer} ></Nav_bar_component>
                <h1>huik</h1>
                <Drawer_component
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

export default Nav_bar;
