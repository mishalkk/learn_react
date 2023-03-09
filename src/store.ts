import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState= {value: {username: ""}}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // state -> previous state & action -> something that we recieve 
        login: (state, action) => {
            state.value = action.payload
        },
        
        logout: (state) => {
            state.value = initialState.value;
        },
    }
}); 

export const {login, logout} = userSlice.actions;

// reducer - function that takes in action and prev state of component and return a new state

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
});