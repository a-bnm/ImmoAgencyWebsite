import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './Reducers/mainReducer';

const store = configureStore({reducer:mainReducer});

export default store;