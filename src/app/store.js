import { configureStore } from '@reduxjs/toolkit';
import  AuthReducer  from '../features/auth/AuthSlice';
import DashboardSlice from '../features/dashboard/DashboardSlice';
export const store = configureStore({
	reducer: {
		login: AuthReducer,
		dashboard: DashboardSlice,
	},
});
