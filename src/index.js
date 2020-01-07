import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './store/reduces/user';
//import userInfoReducer from './store/reduces/userInfo';

//import usersReducer from './store/reduces/users';

const rootReducer = combineReducers({
    user: userReducer,
    // userInfo: userInfoReducer,
    // users: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
