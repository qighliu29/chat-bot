import axios from 'axios';

// timeout
axios.defaults.timeout = 3000;

const instance = axios.create();

export default {
    signUp() {
        return instance.get('http://localhost:3000/signUp');
    }
};