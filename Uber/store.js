import {configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlices";

export const store = configureStore({ // hosts the universal information that is needed throughout the navigation of the app
    reducer:{
        nav:navReducer, // navReducer - sets up the global layer, and you are connecting it to nav
    },
});