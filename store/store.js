import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { postsReducer } from "./order-reduser";
import thanksSlice from './thanks-reduser'

// initial states here
const store = configureStore({
    reducer: {
        post: postsReducer,
        thanks: thanksSlice,
    }
})


export default store

// import { configureStore } from '@reduxjs/toolkit'
// import { postsReducer } from "./order-reduser";
//
//
// const store = configureStore({
//     reducer: {
//         order: postsReducer,
//     }
// })
//
// export default store