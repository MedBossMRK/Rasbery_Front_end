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
                    username: userInfo.username,
                    email: userInfo.email,
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



export const ValidateEmail = (token, props) => {
    return (next) => {

        axios.get('http://localhost:4000/ValidationEmail/' + token,

        )
            .then((response) => {
                console.log(response.data);
                next(actionCreators.ValidateEmailtoReducer());
                props.history.push('/UserInfo');
            })
            .catch((error) => {
                console.log(error);
                console.log("error sign up");
            });

    }

};


export const SendEmail = (state) => {
    return (next) => {
        console.log("token is :" + state.token)
        let config = {
            headers: {
                authorization: "Bearer: " + state.token,
                Username: state.username
            }
        }
        axios.get('http://localhost:4000/SendEmail', config)
            .then((response) => {
                console.log(response.data);
                console.log("email has benn sended")
            })
            .catch((error) => {
                console.log(error);
                console.log("error on sending email");
            });
    }
};

export const userInfoRegistering = (fd, props) => {
    return (next) => {
        console.log("#######");
        console.log(props.user.token);
        let config = {
            headers: {
                authorization: "Bearer: " + props.user.token,
                Username: props.user.username
            }
        }
        axios.post('http://localhost:4000/UserInfo/UserInfoHandler', fd, config)
            .then((response) => {
                console.log(response.data);
                console.log("userInfos have benn sended");
                next(actionCreators.userInfo());
                props.history.push('/');
            })
            .catch((error) => {
                console.log(error);
                console.log("error on sending user Info");
            });

    }
};