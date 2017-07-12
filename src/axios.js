import axios from 'axios';

// timeout
axios.defaults.timeout = 3000;
axios.defaults.headers.post['Content-Type'] = 'application/json'

const instance = axios.create();

export default {
    signUp() {
        // return instance.get('http://localhost:3000/signUp');
        return instance.post('http://localhost:3000/signUp', {name: 'LiuQi'});
    },
    login() {
        return instance.get('http://localhost:3000/login')
    }
};