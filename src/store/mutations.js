import * as types from './types';

export default {
    [types.SIGN_IN]: (state, data) => {
        state.user = data;
    }
};