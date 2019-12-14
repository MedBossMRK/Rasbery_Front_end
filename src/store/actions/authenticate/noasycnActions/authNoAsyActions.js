import * as actionCreators from '../../index';
const axios = require('axios');

export const signInFetch = () => {
    return (next) => {
        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then((response) => {
                next(actionCreators.signIn());
            })
            .catch((error) => {
                console.log(error);
            });

    }

};


export const signUpFetch = (userInfo, props) => {
    return (next) => {
        axios.post('http://localhost:4000/SignUp',
            userInfo
        )
            .then((response) => {
                console.log(response.data.Token);
                next(actionCreators.signUp({
                    ...userInfo,
                    state: 1,
                    isReady: false,
                    isActive: true,
                    authority: "gest",
                    token: response.data.Token,

                }));
                props.history.push('/EmailValidation')
            })
            .catch((error) => {
                console.log(error);
                console.log("error sign up");
            });
    }

};