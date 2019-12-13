import * as actionTypes from '../actions/authenticate/authActionsTypes';
import { updateObject } from '../utility.js';

const initialState = {
    id: -1,
    username: "",
    email: "",
    state: -1,
    isReady: false,
    isActive: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.signIn:
            return updateObject(state, { isActive: true });
        case actionTypes.signUp:
            return updateObject(state, { isActive: true });
    }
    return state;
};

export default reducer;