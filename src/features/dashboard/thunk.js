import { API } from '../../api/Api-client';
import { getAllUsers } from './DashboardSlice';
export const fetchUsers = () => {
	return async (dispatch) => {
		try {
			const response = await API.get('/v1/users');
			const data = response.data;
			dispatch(getAllUsers(data));
		} catch (error) {
			throw new Error(error);
		}
	};
};
