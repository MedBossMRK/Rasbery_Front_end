import * as actionTypes from '../authActionsTypes';

export const signIn = (userInfo) => {
    return {
        type: actionTypes.signIn,
        user: userInfo,
    };
}
export const signUp = (userInfo) => {
    return {
        type: actionTypes.signUp,
        user: userInfo,
    };
}
//this function is usless when the user want to send email
//so the state shouldn't change
/*export const EmailValidation = () => {
    return {
        type: actionTypes.EmailValidation,
    };
}*/
//end
export const SendEmail = () => {
    return {
        type: actionTypes.SendEmail
    };
}

export const ValidateEmailtoReducer = () => {
    return {
        type: actionTypes.validateEmail
    }
}

