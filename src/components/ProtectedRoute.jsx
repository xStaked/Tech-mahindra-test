import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout } from '../layout/Layout';

export const ProtectedRoute = ({ children }) => {
	const { isAuth } = useSelector((state) => state.login);
	if (!isAuth) {
		return <Navigate to='/login' />;
	}

	return children ? (
		children
	) : (
		<Layout>
			<Outlet />
		</Layout>
	);
};
