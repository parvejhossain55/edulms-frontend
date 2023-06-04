import { configureStore } from '@reduxjs/toolkit'
import { ShowLoader, HideLoader } from './slice/loadingSlice'
import loadingSlice from './slice/loadingSlice';
import authReducer from './slice/auth-slice';
import postReducer from './slice/posts-slice';

const store = configureStore({
    reducer: {
        loader : loadingSlice,
        auth: authReducer,
        post: postReducer,
    },
})


export {
    store,
    ShowLoader,
    HideLoader,
}