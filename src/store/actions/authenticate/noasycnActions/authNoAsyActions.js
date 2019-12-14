import * as actionCreators from '../../index';
export const signInFetch = () => {
    return (next) => {
        setTimeout(() => {
            next(actionCreators.signIn());
        }, 1000);
    }

};

export const signUpFetch = (userInfo) => {
    return (next) => {
        setTimeout(() => {
            console.log("Sign Up Fetching ...")
            console.log(userInfo);
            next(actionCreators.signUp());
        }, 1000);
    }

};