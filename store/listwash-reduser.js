import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    onePost: [] ,
}

const listWashSlice = createSlice({
    name: 'onePost',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.onePost = action.payload
        },
    },
    extraReducers: {}
})

export default listWashSlice.reducer

export const {addPost} = listWashSlice.actions
export const {setArticle} = listWashSlice.actions