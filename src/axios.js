import axios from 'axios';

const instance = axios.create();

// timeout
instance.defaults.timeout = 3000;
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.withCredentials = true;

instance.interceptors.response.use((res) => {
    if (res.data.error) {
        return Promise.reject(res.data.error.message);
    }
    else {
        return res;
    }
}, (err) => {
    return Promise.reject(err);
});

export default {
    signUp(data) {
        // return instance.get('http://localhost:3000/signUp');
        return instance.post('http://localhost:3000/signUp', data);
    },
    login() {
        return instance.get('http://localhost:3000/login');
    },
    getInstances(data) {
        return instance.post('http://localhost:3000/instances', data);
    },
    newInstance() {
        return instance.get('http://localhost:3000/create');
    },
    statusInstance(data) {
        return instance.post('http://localhost:3000/status', data);
    },
    stopInstance(data) {
        return instance.post('http://localhost:3000/stop', data);
    }
};