import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/auth/thunk';
import '../../styles/login.css';
export const Login = () => {
	const [data, setData] = useState({
		username: '',
		password: '',
	});
	const [validationsError, setValidationsError] = useState({
		username: '',
		password: '',
		errorResponse: '',
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (data.username.length < 5) {
			validationsError.username = 'Username is too short';
			setValidationsError({ ...validationsError });
			return;
		} else {
			validationsError.username = '';
			setValidationsError({ ...validationsError });
		}
		if (data.password.length < 5) {
			validationsError.password = 'Password is too short';
			setValidationsError({ ...validationsError });
			return;
		} else {
			validationsError.password = '';
			setValidationsError({ ...validationsError });
		}

		const response = await dispatch(login(data.username, data.password));
		if (response) {
			return navigate('/dashboard');
		} else {
			validationsError.errorResponse = 'Invalid credentials';
			setValidationsError({ ...validationsError });
		}
	};

	return (
		<section className='container__login'>
			<form
				onSubmit={handleSubmit}
				onChange={handleChange}
				className='container__login--form'
			>
				<label htmlFor='username' className='container__login--label'>
					Username
				</label>
				<input type='text' id='username' name='username' />
				<p className='error--text'> {validationsError.username} </p>
				<label htmlFor='password' className='container__login--label'>
					Password
				</label>
				<input type='password' id='password' name='password' />
				<p className='error--text'> {validationsError.password} </p>
				<p className='error--text'> {validationsError.errorResponse} </p>
				<button type='submit' className='container__login--button'>
					Submit
				</button>
			</form>
		</section>
	);
};
