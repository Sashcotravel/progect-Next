import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    meneger: true ,
    checked: false
}

const thanksSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        addMeneger: (state, action) => {
            state.meneger = action.payload
        },
        addChecked: (state, action) => {
            state.checked = action.payload
        },
    },
    extraReducers: {}
})

export default thanksSlice.reducer

export const {addMeneger} = thanksSlice.actions
export const {addChecked} = thanksSlice.actions