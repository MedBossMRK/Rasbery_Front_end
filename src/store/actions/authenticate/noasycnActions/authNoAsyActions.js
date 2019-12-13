import * as actionCreators from '../../index';
export const signInFetch = () => {
    return (next) => {
        setTimeout(() => {
            next(actionCreators.signIn());
        }, 1000);
    }

};

export const signUpFetch = () => {
    return (next) => {
        setTimeout(() => {
            next(actionCreators.signUp());
        }, 1000);
    }

};