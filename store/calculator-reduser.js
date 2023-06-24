import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    total: 0,
    order: [],
    checked: false,
}

const listWashSlice = createSlice({
    name: 'onePost',
    initialState,
    reducers: {
        addTotal: (state, action) => {
            state.total += action.payload
        },
        minesTotal: (state, action) => {
            state.total -= action.payload
        },
        addCheckedCalc: (state, action) => {
            state.checked = action.payload
        },
        addOrder: (state, action) => {
            state.onePost.push(action.payload)
        },
        minesOrder: (state, action) => {
            state.onePost.filter(item => item !== action.payload)
        },
    },
    extraReducers: {}
})

export default listWashSlice.reducer

export const {addTotal} = listWashSlice.actions
export const {minesTotal} = listWashSlice.actions
export const {addCheckedCalc} = listWashSlice.actions
export const {addOrder} = listWashSlice.actions
export const {minesOrder} = listWashSlice.actions