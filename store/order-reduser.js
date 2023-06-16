import { createSlice } from '@reduxjs/toolkit'
import { fetchOrder } from "../API/mail";

const initialState = {
    order: {
        total: 0,
        post: '',
        createdAt: null,
        order: [],
        status: 'loading'
    },
}

const postsSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOrder.pending, (state) => {
            state.post.items = []
            state.post.status = 'loading'
        }),
            builder.addCase(fetchOrder.fulfilled, (state, action) => {
            state.post.items = action.payload
            state.post.status = 'loaded'
        }),
            builder.addCase(fetchOrder.rejected, (state) => {
            state.post.items = []
            state.post.status = 'error'
        })
    }
})

export const postsReducer = postsSlice.reducer