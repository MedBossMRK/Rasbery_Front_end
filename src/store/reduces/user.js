import * as actionTypes from '../actions/authenticate/authActionsTypes';
import { updateObject } from '../utility.js';

let initialUserStateSerialize = localStorage.getItem('UserState');
let initialUserState = JSON.parse(initialUserStateSerialize);

/*console.log(initialUserState);
console.log("-------");*/
if (initialUserState == undefined || initialUserState == null) {
    initialUserState = {
        username: "",
        email: "",
        state: 0,
        isReady: false,
        isActive: false,
        authority: "",
        token: "",
    };

    initialUserStateSerialize = JSON.stringify(initialUserState);
    localStorage.setItem('UserState', initialUserStateSerialize);
}


const reducer = (state = initialUserState, action) => {
    switch (action.type) {
        case actionTypes.signIn:
            return updateObject(state, action.user);
        case actionTypes.signUp:
            return updateObject(state, action.user);
        case actionTypes.validateEmail:
            return updateObject(state, { state: 2 });
    }
    return state;
};

export default reducer;