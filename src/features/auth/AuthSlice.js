import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	userName: '',
	profile: {
		firstName: '',
		lastName: '',
	},
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin:(state, action) => {
            state.isAuth = true;
            state.userName = action.payload.userName;
            state.profile.firstName = action.payload.profile.firstName;
            state.profile.lastName = action.payload.profile.lastName;
        }
    }
})

export const { setLogin } = authSlice.actions;

export default authSlice.reducer;