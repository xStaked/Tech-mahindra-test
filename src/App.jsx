import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './views/dashboard/Dashboard';
import { Login } from './views/login/Login';
import { Users } from './views/users/Users';
import { ProtectedRoute } from './components/ProtectedRoute';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Login />} />
				<Route path='/login' element={<Login />} />
				<Route element={<ProtectedRoute />}>
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/users' element={<Users />} />
				</Route>
				<Route path='*' element={<h1>404</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
