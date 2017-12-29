import axios from 'axios';

const baseURL = 'http://jogtracker.herokuapp.com/api/';

const authService = {
    getToken() {
        return axios
            .post(
                'v1/auth/uuidLogin',
                {
                    uuid: 'hello'
                },
                {
                    baseURL,
                    headers: {
                        Accept: 'application/json'
                    }
                }
            )
            .then(res => {
                console.log(res.data);
                return res.data.response;
            });
    }
};

export default authService;
