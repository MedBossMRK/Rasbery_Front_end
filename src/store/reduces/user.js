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
        motorStatus: false,
        keyWait: false,
        users: [],
        notifications: [],

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
        case actionTypes.userInfo:
            return updateObject(state, { state: 3, isReady: true });
        case actionTypes.rasberySignUp:
            return updateObject(state, { authority: 'admin' });
        case actionTypes.LogOut:
            return updateObject(state, {
                username: "",
                email: "",
                state: 0,
                isReady: false,
                isActive: false,
                authority: "",
                token: "",
                motorStatus: false,
                keyWait: false,
                users: [],
                notifications: [],
            });
        case actionTypes.sendInvitationRasbery:
            return updateObject(state, {});
        case actionTypes.ValidateInvitation:
            return updateObject(state, { authority: 'member' });
        case actionTypes.getAllMembers:
            return updateObject(state, { users: action.users });
        case actionTypes.getAllNotifications:
            return updateObject(state, { notifications: action.notifications });
        case actionTypes.deleteUserFromRasbery:
            return updateObject(state, {});
        case actionTypes.TurnOnMotor:
            return updateObject(state, { motorStatus: true, keyWait: false });
        case actionTypes.TurnOffMotor:
            return updateObject(state, { motorStatus: false, keyWait: false });
        case actionTypes.waitMotor:
            return updateObject(state, { keyWait: true });
        case actionTypes.getMotorStatus:
            return updateObject(state, { motorStatus: action.status })
        case actionTypes.forceUpdateAuthority:
            return updateObject(state, { authority: action.authority })

    }
    return state;
};

export default reducer;