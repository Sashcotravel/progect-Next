import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    articleAll: [] ,
    article: []
}

const blogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            state.articleAll.push(action.payload)
        },
        setArticle: (state, action) => {
            state.articleAll.push(action.payload)
        },
    },
    extraReducers: {}
})

export default blogSlice.reducer

export const {addBlog} = blogSlice.actions
export const {setArticle} = blogSlice.actions