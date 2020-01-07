import * as actionTypes from '../actions/authenticate/authActionsTypes';
import { updateObject } from '../utility.js';


const initialUsersState = {
    users: []
};


const reducer = (state = initialUsersState, action) => {

    switch (action.type) {
        case actionTypes.getAllMembers:
            return updateObject(state, { users: action.users });
    }
    console.log("##############222222222222");
    console.log(state);
    console.log("###############22222222222");
    return state;
};

export default reducer;