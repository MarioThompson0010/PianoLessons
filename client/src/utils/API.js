import axios from 'axios';

export default {
    register: function(user) {
        return axios.post('/api/auth/signup/', user);
    },

    login: function(user) {
        return axios.post('/api/authlogin/login/', user);
    }
};