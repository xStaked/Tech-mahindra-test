import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		getAllUsers: (state, action) => {
			state.users = action.payload;
		},
	},
});

export const { getAllUsers } = dashboardSlice.actions;

export default dashboardSlice.reducer;
