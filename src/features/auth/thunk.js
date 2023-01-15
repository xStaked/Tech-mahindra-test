import { API } from '../../api/Api-client';
import { setLogin } from './AuthSlice';

export const login = (userName, password) => {
	return async (dispatch) => {
		try {
			const response = await API.get('v1/users', {
				params: { username: userName },
			});
			const data = [...response.data];
			const user = data.filter((user) => user.userName === userName)[0];

			if (user) {
				if (user.profile.password !== password) {
					throw new Error('Password is incorrect');
				} else {
					dispatch(setLogin(user));
				}
			} else {
				throw new Error('User does not exist');
			}
			return !user ? false : true;
		} catch (error) {
			throw new Error(error);
		}
	};
};
