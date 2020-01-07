import * as actionTypes from '../authActionsTypes';

export const signIn = (userLogin) => {
    return {
        type: actionTypes.signIn,
        user: userLogin,
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

export const LogOut = () => {
    return {
        type: actionTypes.LogOut
    }
}

export const ValidateEmailtoReducer = () => {
    return {
        type: actionTypes.validateEmail
    }
}

export const userInfo = () => {
    return {
        type: actionTypes.userInfo
    }
}

export const rasberySignUp = () => {
    return {
        type: actionTypes.rasberySignUp
    }
}

export const sendInvitationRasbery = () => {
    return {
        type: actionTypes.sendInvitationRasbery
    }
}

export const ValidateInvitation = () => {
    return {
        type: actionTypes.ValidateInvitation
    }
}
export const getAllMembers = (users) => {
    return {
        type: actionTypes.getAllMembers,
        users: users
    }
}

export const deleteUserFromRasbery = () => {
    return {
        type: actionTypes.deleteUserFromRasbery,
    }
}
