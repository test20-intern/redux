// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../reducers/Index";
// import {thunk }from "redux-thunk";

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(thunk),
//   devTools: process.env.NODE_ENV !== "production",
// });

// export default store;


import {createStore,applyMiddleware,compose} from 'redux';  
import {thunk} from 'redux-thunk';
import rootReducer from '../reducers/Index'
const middleware=[thunk];
const initialState={};


const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;