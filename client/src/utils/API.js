import axios from 'axios';

export default {
    register: function(user) {
        return axios.post('/api/auth/signup/', user);
    },

    login: function(user) {
        return axios.post('/api/authlogin/login/', user);
    },
    getDates: function() {
        return axios.get('/api/dates/getDates');
    },
    masterDates: function() {
        return axios.get('../api/dates/datesMaster');
    },
    createDate: function(date) {
        return axios.post('/api/dates/createDate', date );
    },
    logOff: function() {
        return axios.post('/api/logoff/dologoff', {});
    },
    checkAuth:  () => {
        return axios.get('api/checkLogOn/getAuthCheck');
    }
};