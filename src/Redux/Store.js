import { configureStore } from '@reduxjs/toolkit';
import issueReducer from './Reducer/issueReducer';
import userReducer from './Reducer/userReducer';

const store = configureStore({
    reducer:{
        issue:issueReducer,
        user:userReducer
    }
})

export default store;