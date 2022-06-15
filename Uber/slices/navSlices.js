import { createSlice } from "@reduxjs/toolkit";
// this is the data layer file
const initialState = { // initial values you are setting up 
    origin: null,
    destination: null,
    travelTimeInformation : null
}

//creating the navSlice, createSlice is from the toolkit
export const navSlice = createSlice({

    name:'nav',
    initialState,
    reducer:{ // actions to allow you to set the values in initialState
        setOrigin: (state, action) => { //information in action is called payload, state is current information stored in origin
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        }
    }
});

//pushing information to the data layer
export const { setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions; // this is called destructuring, accessing navigation items and exporting it to rest of the app

//Selectors - good practice is one item for each const val
export const selectOrigin = (state) => state.nav.origin;  // gives you current value in the data layer
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;