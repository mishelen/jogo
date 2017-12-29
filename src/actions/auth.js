import AuthService from './../services/auth';

export const USER_AUTH_REQUEST = 'USER_AUTH_REQUEST';
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS';
export const USER_AUTH_FAILURE = 'USER_AUTH_FAILURE';

const userAuthRequest = () => ({
    type: USER_AUTH_REQUEST
});

const userAuthSuccess = payload => ({
    type: USER_AUTH_SUCCESS,
    payload
});

const userAuthFailure = payload => ({
    type: USER_AUTH_FAILURE,
    payload
});

export const userAuth = () => dispatch => {
    dispatch(userAuthRequest());
    return AuthService.getToken().then(
        response => dispatch(userAuthSuccess(response)),
        error => dispatch(userAuthFailure(error))
    );
};
