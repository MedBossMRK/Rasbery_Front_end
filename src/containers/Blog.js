import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Authenticate from './Blog/Authenticate';
import Home from './Blog/Home';
import Error404 from './Blog/404';
import Nav_bar from './Blog/Nav-bar';



class Blog extends Component {

    render() {
        return (
            <div>
                <header>
                    <Nav_bar></Nav_bar>
                </header>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Home" exact component={Home} />

                    <Route path="/authenticate" exact component={Authenticate} />

                    <Route component={Error404} />

                </Switch>

            </div>

        );
    }
}

export default Blog;
