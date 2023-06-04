import {createSlice} from "@reduxjs/toolkit";
import {jwtDecode} from "../../helper/jwtDecode.js";
import {getToken, setToken} from "../../helper/sessionStorage";

const PostSlice = createSlice({
    name: "post",
    initialState: {
        currentPage: 1,
        perPage: 1,
    },
    reducers: {
        setCurrentPage: (state, action)=>{
           state.currentPage = action.payload
        },
    }
});

export const {setCurrentPage} = PostSlice.actions;
export default PostSlice.reducer