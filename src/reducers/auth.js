import { USER_AUTH_SUCCESS } from './../actions/auth';

const auth = (state = {}, action) => {
    switch (action.type) {
        case USER_AUTH_SUCCESS:
            return action.response;
        default:
            return state;
    }
};

export default auth;
