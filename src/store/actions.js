import * as types from './types';

export default {
    SignIn({commit}, data) {
        commit(types.SIGN_IN, data);
    }
};