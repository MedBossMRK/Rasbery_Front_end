import * as actionTypes from '../authActionsTypes';

export const signIn = (userInfo) => {
    return {
        type: actionTypes.signIn,
        user: userInfo,
    };
}
export const signUp = (userInfo, props) => {
    return {
        type: actionTypes.signUp,
        user: userInfo,
    };
}

