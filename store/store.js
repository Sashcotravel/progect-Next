import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { postsReducer } from "./order-reduser";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
    postsReducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

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